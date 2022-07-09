/**
 * This module uses the following environment variables:
 * - INTEGRATION_TYPEFORM_SIGNATURE_KEY
 *   - Typeform webhook signature key
 *   - INTEGRATION_TYPEFORM_SIGNATURE_KEY="foobar"
 */
interface Environment {
	signature: string;
}

export const defaults: Environment = {
	signature: 'foobar',
};

export const environment: Environment = {
	signature:
		process.env['INTEGRATION_TYPEFORM_SIGNATURE_KEY'] || defaults.signature,
};
