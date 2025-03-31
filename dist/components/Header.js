"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ButtonFormat_1 = __importDefault(require("./ButtonFormat"));
const ReturnButton_1 = __importDefault(require("./ReturnButton"));
const Header = ({ mockedData, handleClick }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'header header__wrap', children: [(0, jsx_runtime_1.jsx)(ReturnButton_1.default, { className: 'return-button', onClick: handleClick }), (0, jsx_runtime_1.jsx)("div", { className: 'container__wrap d-flex justify-content-end', children: (0, jsx_runtime_1.jsx)(ButtonFormat_1.default, { mockedData: mockedData }) })] }));
};
exports.default = Header;
