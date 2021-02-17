/*
 * Copyright (C) Balena.io - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

module.exports = {
	slug: 'channel-user-feedback',
	name: 'User Feedback',
	type: 'channel@1.0.0',
	markers: [ 'org-balena' ],
	data: {
		filter: {
			name: 'User feedback cards',
			schema: {
				type: 'object',
				additionalProperties: true,
				required: [ 'type' ],
				properties: {
					type: {
						type: 'string',
						const: 'user-feedback@1.0.0'
					}
				}
			}
		}
	}
}
