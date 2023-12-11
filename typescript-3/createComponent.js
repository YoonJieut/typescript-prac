"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = void 0;
var appendAttributes_js_1 = require("./appendAttributes.js");
var appendChildren_js_1 = require("./appendChildren.js");
var createComponent = function (element, props, children) {
    var tagParts = ["<".concat(element)];
    tagParts = (0, appendAttributes_js_1.appendAttributes)(tagParts, props);
    tagParts = (0, appendChildren_js_1.appendChildren)(tagParts, children);
    tagParts.push("</".concat(element, ">"));
    return tagParts.join(' ');
};
exports.createComponent = createComponent;
