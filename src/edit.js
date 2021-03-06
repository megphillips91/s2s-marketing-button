/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
	RichText,
    AlignmentToolbar,
    BlockControls,
	Fragment,
	} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ToggleControl,
	TextControl,
	SelectControl,
 } from '@wordpress/components';

 import { useState } from '@wordpress/element';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( {attributes, setAttributes} ) {
	const [textColor, setTextColor] = useState(attributes.textColor);

	function onChangeCallToAction( newValue ) {
		setAttributes( { callToAction: newValue } );
	}

	function onChangeAlignment( newValue ) {
		setAttributes( { alignment: newValue } );
		switch (newValue){
			case 'center':
				setAttributes( { justifyContent: 'center' } );
				break;
			case 'left':
				setAttributes( { justifyContent: 'flex-start' } );
				break;
			case 'right':
				setAttributes( { justifyContent: 'flex-end' } );
				break;
		}
	}

	function onChangeButtonSubtitle( newValue ) {
		setAttributes( { buttonSubtitle: newValue } );
	}

	function onChangeButtonLink( newValue ) {
		setAttributes( { href: newValue } );
	}

	function onChangebackgroundColor( newValue ) {
		setAttributes( { backgroundColor: newValue } );
		let style = {
			display: "inline-block",
			border: '2px solid #ccc',
			borderColor: attributes.wrapperStyle.borderColor,
			background: newValue
		}
		setAttributes( { wrapperStyle: style } );
	}

	function onChangeGradientColor( newValue ) {
		setAttributes( { gradientColor: newValue } );
		console.log(newValue);
		if(newValue !== 'undefined'){
			let wrapperStyle = attributes.wrapperStyle;
			wrapperStyle.background = "linear-gradient("+newValue+", "+attributes.backgroundColor+")";
			setAttributes( { wrapperStyle: wrapperStyle } );
			console.log(attributes);
		} else {
			let wrapperStyle = attributes.wrapperStyle;
			wrapperStyle.background = attributes.backgroundColor;
			setAttributes( { wrapperStyle: wrapperStyle } );
		}
	}

	function onChangetextColor( newValue ) {
		setAttributes( { selectedTextColor: newValue} );
		let style = {color: newValue}
		setAttributes( { textColor: style } );
		setAttributes( { pTextColor: style } );
		//border color
		let divStyle = {
			display: "inline-block",
			border: '2px solid #ccc',
			borderColor: newValue,
			background: attributes.wrapperStyle.background
		}
		setAttributes( { wrapperStyle: divStyle } );
	}

	return (
		<div { ...useBlockProps() }
			style={{
				justifyContent: attributes.justifyContent
			}}
		 >
			<InspectorControls>
			<PanelBody
					title={ __( 'Text' ) }
					initialOpen={true}
					>
					<PanelRow>
						<p>{__('Color')}</p>
					</PanelRow>
					<PanelRow>
						<ColorPalette
						value={ attributes.textColor }
						onChange={ onChangetextColor }
						/>
					</PanelRow>
					<PanelRow>
						<p>{__('Link')}</p>
					</PanelRow>
					<PanelRow>
						<TextControl
							value = {attributes.href}
							onChange = { onChangeButtonLink }
							>
						</TextControl>
					</PanelRow>

			</PanelBody>
			 <PanelBody
					title={ __( 'Button' ) }
					initialOpen={true}
					>
					<PanelRow>
						<p>{__('Background Color')}</p>
					</PanelRow>
					<PanelRow>
						<ColorPalette
						value={ attributes.backgroundColor }
						onChange={ onChangebackgroundColor }
						/>
					</PanelRow>
					<PanelRow>
						<p>{__('Gradient')}</p>
					</PanelRow>
					<PanelRow>
						<ColorPalette
						value={ attributes.gradientColor }
						onChange={ onChangeGradientColor }
						/>
					</PanelRow>
				</PanelBody>
				</InspectorControls>
			 {
				<BlockControls>
					<AlignmentToolbar
						value={ attributes.alignment }
						onChange={ onChangeAlignment }
					/>
				</BlockControls>
                }
				<div
					className="s2s-marketing-button-wrapper"
					style={attributes.wrapperStyle}
					>
				<RichText
					tagName="h3"
					onChange={ onChangeCallToAction }
					placeholder={ __( 'I want one' ) }
					value={attributes.callToAction}
					style={attributes.textColor}
				/>
				<RichText
					tagName="p"
					className="s2s-marketing-button-subtitle"
					onChange={ onChangeButtonSubtitle }
					placeholder={ __( 'so how much?' ) }
					value={attributes.buttonSubtitle}
					style={attributes.pTextColor}
				/>
				</div>
		</div>
	);
}
