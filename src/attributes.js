const attributes = {
	alignment: {
		type: 'string',
		default: 'center'
	},
	justifyContent: {
		type: 'string',
		default: 'center'
	},
	wrapperStyle: {
		type: 'object',
		default: {
			display: "inline-block",
			border: '2px solid #ccc',
			borderColor: '#333',
			background: '#eeeeee'
		},
		selector: 'div.s2s-marketing-button-wrapper',
		attribute: 'style',
	},
	backgroundColor: {
		type: 'string',
		default: '#eeeeee'
	},
	selectedTextColor: {
		type: 'string',
		default: '#eeeeee'
	},
	textColor: {
		type: 'object',
		default: {
			color: "#333"
		},
		selector: '.s2s-marketing-button-wrapper h3',
		attribute: 'style'

	},
	pTextColor: {
		type: 'object',
		default: {
			color: "#333"
		},
		selector: '.s2s-marketing-button-wrapper p',
		attribute: 'style'

	},
	borderColor: {
		type: 'string',
		default: '#ccc'
	},
	callToAction: {
			"type": "string",
			"selecttor": "h3",
			"attribute": "text"
		},
    buttonSubtitle: {
			"type": "string",
			"selector": "p",
			"attribute": "text"
		},
	href: {
		"type": "string",
		"selector": "a",
		attribute: "href"
	},
	gradientColor: {
		type: "string",
		default: 'none'
	} //  background-image: linear-gradient(topcolor, bottomcolor);


}

export default attributes;
