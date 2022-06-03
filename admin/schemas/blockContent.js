/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

import link from './link'
import { AiOutlineAlignCenter } from "react-icons/ai";
import React from 'react'
import preview from "part:sanity-plugin-icon-picker/preview"

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {
            title: 'Center',
            value: 'center',
            blockEditor: {
              icon: AiOutlineAlignCenter
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
            link,
          {
            title: "Icon",
            name: "icon",
            type: "iconPicker",
            options: {
              providers: ["fa"],
              outputFormat: 'react',
            },
            blockEditor: { render: ({name, provider, children}) => { return <>{preview({name, provider})} {children}</> } }
          }
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Description',
          type: 'string',
          description: 'For search engines and the visually impaired'
        },
        {
          name: 'className',
          title: 'CSS Class Name',
          type: 'string'
        },
        {
          name: 'width',
          title: 'Width',
          type: 'number'
        },
        {
          name: 'height',
          title: 'Height',
          type: 'number'
        }
      ]
    },
    {
      type: 'column'
    },
    { type: 'button' },
    { type: 'linkButton' },
    {type: 'gallery'},
    {type: 'documentsDisplay'},
    { type: 'youtube' },
    { type: 'contactForm' }
  ],
}
