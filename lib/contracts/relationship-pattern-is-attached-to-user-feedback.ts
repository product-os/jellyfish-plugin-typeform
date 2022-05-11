import type { RelationshipContractDefinition } from 'autumndb';

export const relationshipPatternIsAttachedToUserFeedback: RelationshipContractDefinition =
	{
		slug: 'relationship-pattern-is-attached-to-user-feedback',
		type: 'relationship@1.0.0',
		name: 'is attached to',
		data: {
			inverseName: 'has attached',
			title: 'User feedback',
			inverseTitle: 'Pattern',
			from: {
				type: 'pattern',
			},
			to: {
				type: 'user-feedback',
			},
		},
	};
