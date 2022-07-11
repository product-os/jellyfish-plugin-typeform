import type { RelationshipContractDefinition } from 'autumndb';

export const relationshipMessageIsAttachedToUserFeedback: RelationshipContractDefinition =
	{
		slug: 'relationship-message-is-attached-to-user-feedback',
		type: 'relationship@1.0.0',
		name: 'is attached to',
		data: {
			inverseName: 'has attached element',
			title: 'User feedback',
			inverseTitle: 'Message',
			from: {
				type: 'message',
			},
			to: {
				type: 'user-feedback',
			},
		},
	};
