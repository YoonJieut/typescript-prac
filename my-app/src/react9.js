

function vanilaComponent(tagName, attributes, style, event, children) {
  // #1
  let attributesString = '';
  for (const [key, value] of Object.entries(attributes)) {
    attributesString += `${key}="${value}"`;
  }

  // #2
  let styleString = '';
  for (const [key, value] of Object.entries(style)) {
    styleString += `${key}:${value};`;
  } 

  // #3
  let eventString = '';
  for (const [key, value] of Object.entries(event)){
    eventString += `${key}= "${value}"`;
  }

  // #4
  let childrenString = '';
  for (const child of children){
    if (typeof child === "string" || typeof child === "number"){
      childrenString += child;
    } else {
      childrenString += child.outerHTML;
    }
  }

  // #5
  const htmlString = `
    <${tagName} ${attributesString} style="${styleString}" ${eventString}>
      ${childrenString}
    </${tagName}>
  `;
  return htmlString;
}