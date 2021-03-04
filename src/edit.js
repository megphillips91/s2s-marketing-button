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
	} from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	PanelRow,
	ButtonGroup,
	Button,
	IconButton,
	SelectControl,
	ToggleControl,
	TextControl,
	Flex,
	FlexItem,
 } from '@wordpress/components';

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

	function onChangeCallToAction( newValue ) {
		setAttributes( { callToAction: newValue } );
	}

	function onChangeAlignment( newValue ) {
		setAttributes( { alignment: newValue } );
	}

	function onChangeButtonSubtitle( newValue ) {
		setAttributes( { buttonSubtitle: newValue } );
	}

	function onChangeButtonLink( newValue ) {
		setAttributes( { href: newValue } );
	}

	function onChangeButtonColor( newValue ) {
		setAttributes( { buttonColor: newValue } );
	}

	function onChangeButtonTextColor( newValue ) {
		setAttributes( { buttonTextColor: newValue } );
	}

	return (
		<div { ...useBlockProps() } >

			<InspectorControls>
					<PanelBody 
						title={ __( 'Marketing Button Design' ) }
						initialOpen={ false}
						>
						<PanelRow>
						<TextControl
							label={ __( 'Call to action' ) }
							value={attributes.callToAction}
							onChange ={ onChangeCallToAction }
						/>
						</PanelRow>
						<PanelRow>
						<TextControl
							label={ __( 'Button Subtitle' ) }
							value={attributes.buttonSubtitle}
							onChange ={ onChangeButtonSubtitle }
						/>
						</PanelRow>
						<PanelRow>
						<TextControl
							label={ __( 'Button Link' ) }
							value={attributes.href}
							onChange ={ onChangeButtonLink }
						/>
						</PanelRow>
						<PanelRow>
						<p>{__('Button Color')}</p>
						</PanelRow>
						<PanelRow>
							<ColorPalette
							value={ attributes.buttonColor }
							onChange={ onChangeButtonColor }
							/>
						</PanelRow>
						<PanelRow>
							<p>{__('Button Text Color')}</p>
						</PanelRow>
						<PanelRow>
							<ColorPalette
							value={ attributes.buttonTextColor }
							onChange={ onChangeButtonTextColor }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<a href={attributes.href} style={{color: attributes.buttonTextColor}} >
					<div class="s2s-button-wrapper" style={{background: attributes.buttonColor}}>
					{
						<BlockControls>
							<AlignmentToolbar
								value={ attributes.alignment }
								onChange={ onChangeAlignment }
							/>
						</BlockControls>
					}
					<RichText
						style={ { textAlign: alignment } }
						tagName="p"
						onChange={ onChangeCallToAction }
						value={ attributes.callToAction }
					/>
					</div>
				</a>
		</div>
	);
}
