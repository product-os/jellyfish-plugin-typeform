process.env.INTEGRATION_TYPEFORM_SIGNATURE_KEY = 'buzbaz';
import { environment } from '../../../lib/environment';

afterAll(() => {
	delete process.env.INTEGRATION_TYPEFORM_SIGNATURE_KEY;
});

test('Can override environment variable defaults', () => {
	expect(environment).toEqual({
		signature: 'buzbaz',
	});
});
