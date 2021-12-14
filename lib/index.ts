import { JellyfishPluginBase } from '@balena/jellyfish-plugin-base';
import { cards } from './cards';
import integrations from './integrations';

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
			integrations,
			requires: [
				{
					slug: 'jellyfish-plugin-default',
					version: '>=19.x',
				},
				{
					slug: 'jellyfish-plugin-channels',
					version: '>=1.x',
				},
			],
		});
	}
}
