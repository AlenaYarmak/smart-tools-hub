"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const getCSSVariable_1 = __importDefault(require("../utils/getCSSVariable"));
const ReturnButton = ({ onClick }) => {
    const [isHovering, setIsHovering] = (0, react_1.useState)(false);
    const hoverColor = (0, getCSSVariable_1.default)('--button-color');
    return ((0, jsx_runtime_1.jsx)("svg", { onClick: onClick, onMouseEnter: () => setIsHovering(true), onMouseLeave: () => setIsHovering(false), xmlns: 'http://www.w3.org/2000/svg', width: '28', height: '28', fill: isHovering ? hoverColor : '#FFF', className: 'bi bi-arrow-return-left return-button pointer', style: {
            transition: '.3s'
        }, viewBox: '0 0 16 16', children: (0, jsx_runtime_1.jsx)("path", { "fill-rule": 'evenodd', d: 'M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5' }) }));
};
exports.default = ReturnButton;
