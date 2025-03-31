"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AddSection = ({ clickSection }) => {
    return ((0, jsx_runtime_1.jsx)("div", { onClick: clickSection, className: 'container__wrap', children: (0, jsx_runtime_1.jsx)("div", { className: 'section add__section pointer rounded-4 d-flex justify-content-center align-items-center', children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "26", height: "26", fill: "currentColor", className: "bi bi-plus", viewBox: "0 0 16 16", children: (0, jsx_runtime_1.jsx)("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" }) }) }) }));
};
exports.default = AddSection;
