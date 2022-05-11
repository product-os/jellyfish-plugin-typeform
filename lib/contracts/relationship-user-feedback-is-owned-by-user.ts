import type { RelationshipContractDefinition } from 'autumndb';

export const relationshipUserFeedbackIsOwnedByUser: RelationshipContractDefinition =
	{
		slug: 'relationship-user-feedback-is-owned-by-user',
		type: 'relationship@1.0.0',
		name: 'is owned by',
		data: {
			inverseName: 'owns',
			title: 'Owner',
			inverseTitle: 'Owned user feedback',
			from: {
				type: 'user-feedback',
			},
			to: {
				type: 'user',
			},
		},
	};
