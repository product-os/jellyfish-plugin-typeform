import type { ContractDefinition } from 'autumndb';
import { channelUserFeedback } from './channel-user-feedback';
import { relationshipMessageIsAttachedToUserFeedback } from './relationship-message-is-attached-to-user-feedback';
import { relationshipPatternIsAttachedToUserFeedback } from './relationship-pattern-is-attached-to-user-feedback';
import { relationshipUserFeedbackIsOwnedByUser } from './relationship-user-feedback-is-owned-by-user';
import { userFeedback } from './user-feedback';

export const contracts: ContractDefinition[] = [
	channelUserFeedback,
	relationshipMessageIsAttachedToUserFeedback,
	relationshipPatternIsAttachedToUserFeedback,
	relationshipUserFeedbackIsOwnedByUser,
	userFeedback,
];
