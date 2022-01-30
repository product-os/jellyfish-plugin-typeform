import type { ContractDefinition } from '@balena/jellyfish-types/build/core';
import { channelUserFeedback } from './channel-user-feedback';
import { userFeedback } from './user-feedback';

export const contracts: ContractDefinition[] = [
	channelUserFeedback,
	userFeedback,
];
