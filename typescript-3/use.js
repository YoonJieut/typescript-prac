"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createComponent_js_1 = require("./createComponent.js");
var myComponent = (0, createComponent_js_1.createComponent)('div', { id: 'example', style: { color: 'red' } }, ['이것이 자스렸다.']);
var root = document.getElementById('root');
root.innerHTML = myComponent;
