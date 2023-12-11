"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendAttributes = void 0;
var styleToString_js_1 = require("./styleToString.js");
var appendAttributes = function (tagParts, props) {
    for (var _i = 0, _a = Object.entries(props); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var attributeString = "";
        if (key === "style" && typeof value === "object") {
            attributeString = "style=\"".concat((0, styleToString_js_1.styleToString)(value), "\"");
        }
        else {
            attributeString = "".concat(key, " =\"").concat(value, "\"");
        }
        tagParts.push(attributeString);
        tagParts.push('>');
    }
    return tagParts;
};
exports.appendAttributes = appendAttributes;
