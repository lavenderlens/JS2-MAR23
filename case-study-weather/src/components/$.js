/**
 * what do all HTML elements have in common?
 * tag name
 * attributes - class, id, special src, href, url
 * on-events - TODO
 * innerHTML / children
 * innerText
 *
 */

export const $ = (type, text, attributes = {}, children = []) => {
  // type
  const el = document.createElement(type);
  // text
  if (text !== null) {
    el.innerText = text;
  }
  // attributes
  for (const [key, value] of Object.entries(attributes)) {
    el.setAttribute(key, value);
  }
  // children
  for (let child of children) {
    el.appendChild(child);
  }
  return el;
};
