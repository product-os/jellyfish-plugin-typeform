import { defaultPlugin } from '@balena/jellyfish-plugin-default';
import { channelsPlugin } from '@balena/jellyfish-plugin-channels';
import { PluginManager } from '@balena/jellyfish-worker';
import { typeformPlugin } from '../../lib/index';

const pluginManager = new PluginManager([
	defaultPlugin(),
	channelsPlugin(),
	typeformPlugin(),
]);

test('Expected contracts are loaded', () => {
	const contracts = pluginManager.getCards();
	expect(contracts['user-feedback'].name).toEqual('User Feedback');
	expect(contracts['channel-user-feedback'].name).toEqual('User Feedback');
});

test('Expected integrations are loaded', () => {
	const integrations = pluginManager.getSyncIntegrations();
	expect(Object.keys(integrations).includes('typeform')).toBeTruthy();
});
