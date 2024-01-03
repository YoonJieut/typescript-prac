
/** 
 * 아래의 함수는 모든 매개변수를 하나하나 문자열로 만들어 지역변수에 할당하고
 * 마지막에 이를 조합하여 반환하는 일련의 과정이 '반복적으로'작성 되어 있는 안티패턴입니다.
 * 
 * 하지만, 매개변수가 너무 많아질 때의 문제와 반복 작동 코드의 문제점을 발견하기 좋습니다.
 * 매우 절차적이고, 융통성(?)이 없는 코드이므로, jsx로 멋지게 추상화된 코드와 함께 비교해보면 좋습니다.
*/



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

// --------------- map으로 변형하기 ---------------

function vanilaComponent(tagName, attributes, style, event, children) {
  const attributesString = Object.entries(attributes).map(([key, value]) => `${key}="${value}"`).join(' ');
  const styleString = Object.entries(style).map(([key, value]) => `${key}:${value}`).join(';');
  const eventString = Object.entries(event).map(([key, value]) => `${key}="${value}"`).join(' ');
  const childrenString = children.map(child => typeof child === "string" || typeof child === "number" ? child : child.outerHTML).join('');

  const htmlString = `
    <${tagName} ${attributesString} style="${styleString}" ${eventString}>
      ${childrenString}
    </${tagName}>
  `;
  return htmlString;
}