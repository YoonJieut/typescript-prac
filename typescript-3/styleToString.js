"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleToString = void 0;
var styleToString = function (style) {
    var entries = Object.entries(style);
    var objectValue = entries.map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, ": ").concat(value, ";");
    });
    return objectValue.join(' ');
};
exports.styleToString = styleToString;
