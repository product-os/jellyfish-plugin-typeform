export default {
	slug: 'channel-user-feedback',
	name: 'User Feedback',
	type: 'channel@1.0.0',
	markers: ['org-balena'],
	data: {
		filter: {
			name: 'User feedback cards',
			schema: {
				type: 'object',
				additionalProperties: true,
				required: ['type'],
				properties: {
					type: {
						type: 'string',
						const: 'user-feedback@1.0.0',
					},
				},
			},
		},
	},
};
