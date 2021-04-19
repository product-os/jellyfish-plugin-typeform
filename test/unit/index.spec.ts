/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

// tslint:disable: no-var-requires
import { TypeformPlugin } from '../../lib/index';

// TS-TODO: Update import after core is converted to TypeScript
const coreMixins = require('@balena/jellyfish-core/lib/cards/mixins');

const context = {
	id: 'jellyfish-plugin-typeform-test',
};

const plugin = new TypeformPlugin();

test('Expected cards are loaded', () => {
	const cards = plugin.getCards(context, coreMixins);

	// Sanity check
	expect(cards['user-feedback'].name).toEqual('User Feedback');
	expect(cards['channel-user-feedback'].name).toEqual('User Feedback');
});

test('Expected integrations are loaded', () => {
	const integrations = plugin.getSyncIntegrations(context);

	// Sanity check
	expect(integrations.typeform.slug).toEqual('typeform');
});
