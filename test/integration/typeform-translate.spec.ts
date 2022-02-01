import { channelsPlugin } from '@balena/jellyfish-plugin-channels';
import { defaultPlugin } from '@balena/jellyfish-plugin-default';
import { productOsPlugin } from '@balena/jellyfish-plugin-product-os';
import { testUtils } from '@balena/jellyfish-worker';
import _ from 'lodash';
import path from 'path';
import { typeformPlugin } from '../../lib';
import webhooks from './webhooks';

let ctx: testUtils.TestContext;

beforeAll(async () => {
	ctx = await testUtils.newContext({
		plugins: [
			defaultPlugin(),
			productOsPlugin(),
			channelsPlugin(),
			typeformPlugin(),
		],
	});

	await testUtils.translateBeforeAll(ctx);
}, 10000);

afterEach(async () => {
	await testUtils.translateAfterEach(ctx);
});

afterAll(() => {
	return testUtils.destroyContext(ctx);
});

describe('translate logic works as expected', () => {
	for (const testCaseName of Object.keys(webhooks)) {
		const testCase = webhooks[testCaseName];
		const expected = {
			head: testCase.expected.head,
			tail: _.sortBy(testCase.expected.tail, testUtils.tailSort),
		};
		for (const variation of testUtils.getVariations(testCase.steps, {
			permutations: true,
		})) {
			test(`(${variation.name}) ${testCaseName}`, async () => {
				await testUtils.webhookScenario(
					ctx,
					{
						steps: variation.combination,
						prepareEvent: async (event: any): Promise<any> => {
							return event;
						},
						offset:
							_.findIndex(testCase.steps, _.first(variation.combination)) + 1,
						headIndex: testCase.headIndex || 0,
						original: testCase.steps,

						// If we miss events such as when a head card was archived,
						// we usually can't know the date this happened, but we can
						// still apply it with a date approximation. In those cases,
						// its helpful to omit the update events from the tail checks.
						ignoreUpdateEvents: !_.isEqual(
							variation.combination,
							testCase.steps,
						),

						expected: _.cloneDeep(expected),
						name: testCaseName,
						variant: variation.name,
					},
					{
						source: 'typeform',
						baseUrl: 'https://api.typeform.com',
						uriPath: /.*/,
						basePath: path.join(__dirname, 'webhooks'),
						isAuthorized: () => {
							return true;
						},
					},
				);
			});
		}
	}
});