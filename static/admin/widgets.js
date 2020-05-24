/* eslint-disable no-undef */

CMS.registerEditorComponent({
  // Internal id of the component
  id: 'blog-image',
  // Visible label
  label: 'Blog Image',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: 'src', label: 'Source', widget: 'image' },
    { name: 'alt', label: 'Alt Text', widget: 'string' },
    { name: 'width', label: 'Width', widget: 'number', valueType: 'int' },
    { name: 'height', label: 'Height', widget: 'number', valueType: 'int' },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<blog-image src="(.*)" width="(\d+)" height="(\d+)" alt="(.*)"><\/blog-image>/,
  // Function to extract data elements from the regexp match
  fromBlock(match) {
    return {
      src: match[1],
      width: match[2],
      height: match[3],
      alt: match[4],
    }
  },
  // Function to create a text block from an instance of this component
  toBlock(obj) {
    return `<blog-image src="${obj.src}" width="${obj.width}" height="${obj.height}" alt="${obj.alt}"></blog-image>`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview(obj) {
    return `<img src="${obj.src}" width="${obj.width}" height="${obj.height}" alt="${obj.alt}" />`
  },
})
