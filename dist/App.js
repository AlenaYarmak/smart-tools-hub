"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const MianPage_1 = __importDefault(require("./views/MianPage"));
const AboutPage_1 = __importDefault(require("./views/AboutPage"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
function App() {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'App', children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(AboutPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/download', element: (0, jsx_runtime_1.jsx)(MianPage_1.default, {}) })] }) }));
}
exports.default = App;
