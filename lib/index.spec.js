/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const ava = require('ava')
const coreMixins = require('@balena/jellyfish-core/lib/cards/mixins')
const Plugin = require('./index')

const context = {
	id: 'jellyfish-plugin-typeform-test'
}

const plugin = new Plugin()

ava('Expected cards are loaded', (test) => {
	const cards = plugin.getCards(context, coreMixins)

	// Sanity check
	test.is(cards['user-feedback'].name, 'User Feedback')
	test.is(cards['channel-user-feedback'].name, 'User Feedback')
})

ava('Expected integrations are loaded', (test) => {
	const integrations = plugin.getSyncIntegrations(context)

	// Sanity check
	test.is(integrations.typeform.slug, 'typeform')
})
