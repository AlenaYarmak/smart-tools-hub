"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("./Button"));
const ButtonFormatController_1 = __importDefault(require("../controllers/ButtonFormatController"));
const ButtonFormat = ({ mockedData }) => {
    const { arrowStatus, selectedFormat, hovered, openedPosition, defaultPosition, showButtons, handleListClick, generatePdf, generateDocx, basedStyles, hoveredStyle, handleMouseEnter, handleMouseLeave, } = (0, ButtonFormatController_1.default)({ mockedData });
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'btn-group bg-white', role: 'group', children: [selectedFormat === 'PDF' && ((0, jsx_runtime_1.jsx)(Button_1.default, { text: 'PDF', clickFunction: generatePdf })), selectedFormat === 'DOC' && ((0, jsx_runtime_1.jsx)(Button_1.default, { text: 'DOC', clickFunction: generateDocx })), (0, jsx_runtime_1.jsx)("button", { onClick: showButtons, type: 'button', className: 'button__fs btn button-color btn-lg py-3 px-4 rounded-end', children: (0, jsx_runtime_1.jsx)("svg", { style: {
                        transition: '0.3s',
                        transform: arrowStatus ? openedPosition : defaultPosition
                    }, xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', fill: 'currentColor', className: 'bi bi-caret-down', viewBox: '0 0 16 16', children: (0, jsx_runtime_1.jsx)("path", { d: 'M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659' }) }) }), arrowStatus &&
                (0, jsx_runtime_1.jsx)("div", { className: 'list__buttons', children: (0, jsx_runtime_1.jsxs)("ul", { className: 'list-group lh-lg', children: [(0, jsx_runtime_1.jsx)("li", { className: hovered === 'DOC' ? hoveredStyle : basedStyles, onClick: () => handleListClick('DOC'), onMouseEnter: () => handleMouseEnter('DOC'), onMouseLeave: handleMouseLeave, children: "DOC" }), (0, jsx_runtime_1.jsx)("li", { className: hovered === 'PDF' ? hoveredStyle : basedStyles, onClick: () => handleListClick('PDF'), onMouseEnter: () => handleMouseEnter('PDF'), onMouseLeave: handleMouseLeave, children: "PDF" })] }) })] }));
};
exports.default = ButtonFormat;
