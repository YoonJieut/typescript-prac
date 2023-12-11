"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendChildren = void 0;
var appendChildren = function (tagParts, children) {
    if (children) {
        tagParts.push.apply(tagParts, children);
    }
    return tagParts;
};
exports.appendChildren = appendChildren;
