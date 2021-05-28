/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

// tslint:disable: no-var-requires
import { JellyfishPluginBase } from '@balena/jellyfish-plugin-base';
import cards from './cards';
import integrations from './integrations';

// TS-TODO: don't load mixins with a deep import
const defaultPluginMixins = require('@balena/jellyfish-plugin-default/lib/cards/mixins');

/**
 * The Typeform Jellyfish plugin.
 */
export class TypeformPlugin extends JellyfishPluginBase {
	constructor() {
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
					version: '>=5.x',
				},
				{
					slug: 'jellyfish-plugin-channels',
					version: '>=1.x',
				},
			],
		});
	}
}
