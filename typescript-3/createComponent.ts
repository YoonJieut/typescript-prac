import { appendAttributes } from "./appendAttributes.js";
import { appendChildren } from "./appendChildren.js";


export const createComponent = (element, props, children) => {
  let tagParts = [`<${element}`];
  tagParts = appendAttributes(tagParts, props);
  tagParts = appendChildren(tagParts, children);
  tagParts.push(`</${element}>`);
  return tagParts.join(' ');
};