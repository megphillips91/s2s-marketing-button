const attributes = {
	buttonColor: {
		type: 'string',
		default: ''
	},
	buttonTextColor: {
		type: 'string',
		default: ''
	},
	callToAction: {
			"type": "string",
			"source": "html",
			"selector": "h3",
			"attribute": "text",
			"default": "I want one"

		},
    buttonSubtitle: {
			"type": "string",
			"source": "html",
			"selector": "p",
			"attribute": "text",
			"default": "so how much?"
		},
	href: {
		"type": "string",
		"source": "html",
		"selector": "a",
		"attribute": "href"
	},
	borderRadius: {
			"type": "number"
		},
}

export default attributes;
