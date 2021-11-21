import { cardMixins as coreMixins } from '@balena/jellyfish-core';
import { TypeformPlugin } from '../../lib/index';

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
