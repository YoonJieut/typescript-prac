import { styleToString } from "./styleToString.js";

export const appendAttributes = (tagParts, props)=> {

  for(const [key,value] of Object.entries(props)) {
    let attributeString="";
    if(key === "style" && typeof value === "object"){
      attributeString = `style="${styleToString(value)}"`;
      }else {
        attributeString = `${key} ="${value}"`;
      }
    tagParts.push(attributeString);
    tagParts.push('>');
  }
  return tagParts;
}