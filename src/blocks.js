/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Registering a basic block with Gutenberg.
 * Webpack is compiling as the input file.
 */

// Import CSS.
import './style.scss';
import './editor.scss';
import './block/block.js';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
* Register: aa Gutenberg Block.
*
* Registers a new block provided a unique name and an object defining its
* behavior. Once registered, the block is made editor as an option to any
* editor interface where blocks are implemented.
*
* @link https://wordpress.org/gutenberg/handbook/block-api/
* @param {string} name Block name.
* @param {Object} settings Block settings.
* @return {?WPBlock} The block, if it has been successfully
* registered; otherwise `undefined`.
*/

(function (blocks, editor, element) {
    var el = element.createElement;
    var RichText = editor.RichText;

    blocks.registerBlockType('cgb/block-cta-block', {
        title: 'CTA Block',
        icon: 'testimonial',
        category: 'common',

        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: 'p',
            },
        },

        edit: function (props) {
            var content = props.attributes.content;
            function onChangeContent(newContent) {
                props.setAttributes({ content: newContent });
            }

            return el(
                RichText,
                {
                    tagName: 'p',
                    className: props.className,
                    onChange: onChangeContent,
                    value: content,
                }
            );
        },

        save: function (props) {
            return el(RichText.Content, {
                tagName: 'p', value: props.attributes.content,
            });
        },
    });
}(
    window.wp.blocks,
    window.wp.editor,
    window.wp.element
));