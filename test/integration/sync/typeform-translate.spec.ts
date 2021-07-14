/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { DefaultPlugin } from '@balena/jellyfish-plugin-default';
import { syncIntegrationScenario } from '@balena/jellyfish-test-harness';
import ActionLibrary from '@balena/jellyfish-action-library';
import { ChannelsPlugin } from '@balena/jellyfish-plugin-channels';
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
