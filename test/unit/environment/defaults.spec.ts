import { defaults, environment } from '../../../lib/environment';

test('Default environment variable values are set', () => {
	expect(environment).toEqual({
		signature: defaults.signature,
	});
});
