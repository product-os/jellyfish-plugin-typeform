import type { PluginDefinition } from '@balena/jellyfish-worker';
import { contracts } from './contracts';
import { integrations } from './integrations';

// tslint:disable-next-line: no-var-requires
const { version } = require('../package.json');

/**
 * The Typeform Jellyfish plugin.
 */
export const typeformPlugin = (): PluginDefinition => {
	return {
		slug: 'plugin-typeform',
		name: 'Typeform Plugin',
		version,
		contracts,
		integrationMap: integrations,
		requires: [
			{
				slug: 'plugin-default',
				version: '>=23.x',
			},
		],
	};
};
