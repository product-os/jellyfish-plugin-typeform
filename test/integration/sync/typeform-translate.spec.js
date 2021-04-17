/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')
const {
	syncIntegrationScenario
} = require('@balena/jellyfish-test-harness')
const ActionLibrary = require('@balena/jellyfish-action-library')
const DefaultPlugin = require('@balena/jellyfish-plugin-default')
const {
	ChannelsPlugin
} = require('@balena/jellyfish-plugin-channels')
const TypeformPlugin = require('../../../lib')

syncIntegrationScenario.run({
	test: ava.serial,
	before: ava.before,
	beforeEach: ava.beforeEach,
	after: ava.after.always,
	afterEach: ava.afterEach.always
}, {
	basePath: __dirname,
	plugins: [ ActionLibrary, DefaultPlugin, ChannelsPlugin, TypeformPlugin ],
	cards: [ 'user-feedback' ],
	integration: require('../../../lib/integrations/typeform'),
	scenarios: require('./webhooks/typeform'),
	baseUrl: 'https://api.typeform.com',
	stubRegex: /.*/,
	source: 'typeform',
	// eslint-disable-next-line lodash/prefer-constant
	isAuthorized: () => {
		return true
	}
})
