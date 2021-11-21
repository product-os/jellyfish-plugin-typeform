import { syncIntegrationScenario } from '@balena/jellyfish-test-harness';
import ActionLibrary from '@balena/jellyfish-action-library';
import { ChannelsPlugin } from '@balena/jellyfish-plugin-channels';
import { DefaultPlugin } from '@balena/jellyfish-plugin-default';
import { TypeformPlugin } from '../../../lib';

syncIntegrationScenario.run(
	{
		test,
		before: beforeAll,
		beforeEach,
		after: afterAll,
		afterEach,
	},
	{
		basePath: __dirname,
		plugins: [ActionLibrary, DefaultPlugin, ChannelsPlugin, TypeformPlugin],
		cards: ['user-feedback'],
		scenarios: require('./webhooks/typeform'),
		baseUrl: 'https://api.typeform.com',
		stubRegex: /.*/,
		source: 'typeform',
		isAuthorized: () => {
			return true;
		},
	},
);
