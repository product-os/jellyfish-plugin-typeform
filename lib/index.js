/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

const {
	JellyfishPluginBase
} = require('@balena/jellyfish-plugin-base')
const defaultPluginMixins = require('@balena/jellyfish-plugin-default/lib/cards/mixins')
const cards = require('./cards')
const integrations = require('./integrations')

/**
 * A plugin that provides cards and an integration relating to user feedback from Typeform.
 *
 * @module TypeformPlugin
 */

/**
 * The Typeform Jellyfish plugin.
 */
module.exports = class TypeformPlugin extends JellyfishPluginBase {
	constructor () {
		super({
			slug: 'jellyfish-plugin-typeform',
			name: 'Typeform Plugin',
			version: '1.0.0',
			cards,
			mixins: defaultPluginMixins,
			integrations,
			requires: [
				{
					slug: 'jellyfish-plugin-default',
					version: '>=5.x'
				},
				{
					slug: 'jellyfish-plugin-channels',
					version: '>=1.x'
				}
			]
		})
	}
}
