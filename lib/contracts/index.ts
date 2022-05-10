import type { ContractDefinition } from '@balena/jellyfish-types/build/core';
import { channelUserFeedback } from './channel-user-feedback';
import { relationshipPatternIsAttachedToUserFeedback } from './relationship-pattern-is-attached-to-user-feedback';
import { relationshipUserFeedbackIsOwnedByUser } from './relationship-user-feedback-is-owned-by-user';
import { userFeedback } from './user-feedback';

export const contracts: ContractDefinition[] = [
	channelUserFeedback,
	relationshipPatternIsAttachedToUserFeedback,
	relationshipUserFeedbackIsOwnedByUser,
	userFeedback,
];
