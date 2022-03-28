import type { Contract } from '@balena/jellyfish-types/build/core';
import type {
	Integration,
	IntegrationDefinition,
	SequenceItem,
} from '@balena/jellyfish-worker';
import crypto from 'crypto';
import _ from 'lodash';

const SLUG = 'typeform';

export class TypeformIntegration implements Integration {
	public slug = SLUG;

	// TS-TODO: Use proper types
	public context: any;
	public options: any;

	// TS-TODO: Use proper types
	constructor(options: any) {
		this.options = options;
		this.context = this.options.context;
	}

	public async destroy() {
		return Promise.resolve();
	}

	public async mirror(_contract: Contract, _options: { actor: string }) {
		return [];
	}

	public async translate(
		event: Contract,
		_options: { actor: string },
	): Promise<SequenceItem[]> {
		if (!this.options.token || !this.options.token.signature) {
			return [];
		}
		const adminActorId = await this.context.getActorId({
			handle: this.options.defaultUser,
		});
		const formResponse = (event.data.payload as any).form_response;
		const formId = formResponse.form_id;
		const email =
			!!formResponse.hidden && /\s/.test(formResponse.hidden.email)
				? formResponse.hidden.email
				: (formResponse.answers.find((el) => el.type === 'email') || {})
						.email || null;
		const responseId = formResponse.token;
		const contractSlug = `user-feedback-${formId}-${responseId}`;
		const formResponseMirrorId = `https://api.typeform.com/forms/${formId}/responses?included_response_ids=${responseId}`;
		const username = /\s/.test(formResponse.hidden.user)
			? null
			: formResponse.hidden.user;
		const timestamp = new Date(formResponse.submitted_at).toISOString();
		const questionsToProps = {
			'How did you first hear about balenaCloud?':
				'howDidYouFirstHearAboutBalenaCloud',
			'How would you describe your role?': 'howWouldYouDescribeYourRole',
			'Could you briefly describe your use case?':
				'couldYouBrieflyDescribeYourUsecase',
			'How has your experience been so far? What can we improve? We count on your honest feedback to make balenaCloud better.':
				'howHasYourExperienceBeenSoFar',
			'How likely are you to recommend balenaCloud to a friend or co-worker?':
				'howLikelyAreYouToRecommendBalenaCloud',
		};
		const data = _.chain(
			_.zip(formResponse.definition.fields, formResponse.answers),
		)
			.map((pair: any[]) => {
				if (!Object.keys(questionsToProps).includes(pair[0].title)) {
					// The only questions we currently support are the ones in questionsToProps keys.
					// Any other question is ommited
					return [];
				}
				for (const [title, props] of Object.entries(questionsToProps)) {
					if (title === pair[0].title) {
						return [props, pair[1][pair[1].type]];
					}
				}
				return [];
			})
			.filter((item) => {
				return _.size(item) > 0;
			})
			.fromPairs()
			.assign({
				mirrors: [formResponseMirrorId],
				user: username,
				status: 'open',
				timestamp,
				email,
			})
			.value();
		return [
			{
				time: new Date(timestamp),
				actor: adminActorId,
				card: {
					name: `Feedback from ${username || 'unknown user'}`,
					type: 'user-feedback@1.0.0',
					slug: contractSlug,
					active: true,
					tags: [],
					requires: [],
					capabilities: [],
					data,
				},
			},
		];
	}
}

export const typeformIntegrationDefinition: IntegrationDefinition = {
	initialize: async (options) => new TypeformIntegration(options),
	isEventValid: (_logContext, token, rawEvent, headers) => {
		const signature = headers['typeform-signature'];
		if (!signature || !token || !token.signature) {
			return false;
		}

		const hash = crypto
			.createHmac('sha256', token.signature)
			.update(rawEvent)
			.digest('base64');
		return signature === `sha256=${hash}`;
	},
};
