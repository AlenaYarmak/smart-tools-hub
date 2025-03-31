"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const MenuItem = ({ text, onClick }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { onClick: onClick, className: 'menu__item pointer subtitle', children: text }) }));
};
exports.default = MenuItem;
