"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const Accordion_1 = __importDefault(require("react-bootstrap/Accordion"));
const AccordionContext_1 = __importDefault(require("react-bootstrap/AccordionContext"));
const AccordionButton_1 = require("react-bootstrap/AccordionButton");
const Card_1 = __importDefault(require("react-bootstrap/Card"));
const mockData_json_1 = __importDefault(require("../assets/data/mockData.json"));
const openedPosition = 'rotate(0)';
const defaultPosition = 'rotate(-90deg)';
const ContextAwareToggle = ({ eventKey, callback, setActiveKey, title }) => {
    const { activeEventKey } = (0, react_1.useContext)(AccordionContext_1.default);
    const decoratedOnClick = (0, AccordionButton_1.useAccordionButton)(eventKey, () => {
        if (callback)
            callback(eventKey);
        setActiveKey((prevActiveKey) => prevActiveKey.includes(eventKey)
            ? prevActiveKey.filter((key) => key !== eventKey)
            : [...prevActiveKey, eventKey]);
    });
    const isCurrentEventKey = (activeEventKey || []).includes(eventKey);
    return ((0, jsx_runtime_1.jsxs)("div", { onClick: decoratedOnClick, className: 'd-flex align-items-center', children: [(0, jsx_runtime_1.jsx)("svg", { style: {
                    transition: '0.3s',
                    transform: isCurrentEventKey ? openedPosition : defaultPosition,
                }, xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', fill: 'currentColor', className: 'bi bi-caret-down', viewBox: '0 0 16 16', children: (0, jsx_runtime_1.jsx)("path", { d: 'M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659' }) }), (0, jsx_runtime_1.jsx)("p", { className: 'm-0 ps-2 title--fs', children: title })] }));
};
const DeleteSection = ({ handleDelete, className }) => {
    return ((0, jsx_runtime_1.jsxs)("svg", { onClick: handleDelete, xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', fill: 'currentColor', className: `bi bi-trash delete__btn ${className}`, viewBox: '0 0 16 16', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z' }), (0, jsx_runtime_1.jsx)("path", { d: 'M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z' })] }));
};
// AccElement Component with forwardRef to receive the ref
const AccElement = react_1.default.forwardRef(({ subtitle, description, title, index, onDelete }, ref) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    let classNameIcon = visible ? 'display-block' : 'display-none';
    const accordionArrayLength = mockData_json_1.default.length;
    // Function to generate array of strings
    function generateStringArray(n) {
        return Array.from({ length: n }, (_, i) => i.toString());
    }
    const sessionStorageKey = `accordionState-${index}`;
    const getInitialState = () => {
        const savedState = sessionStorage.getItem(sessionStorageKey);
        return savedState ? JSON.parse(savedState) : generateStringArray(accordionArrayLength);
    };
    const [activeKey, setActiveKey] = (0, react_1.useState)(getInitialState);
    (0, react_1.useEffect)(() => {
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(activeKey));
    }, [activeKey, sessionStorageKey]);
    return ((0, jsx_runtime_1.jsx)(Accordion_1.default, { onMouseEnter: () => setVisible(true), onMouseLeave: () => setVisible(false), ref: ref, className: 'mb-5', alwaysOpen: true, activeKey: activeKey, children: (0, jsx_runtime_1.jsxs)(Card_1.default, { className: 'py-3 border-0 rounded-4 background-color', children: [(0, jsx_runtime_1.jsxs)(Card_1.default.Header, { className: 'border-0 p-2 mx-auto background-color d-flex justify-content-between', style: { width: '98%' }, children: [(0, jsx_runtime_1.jsx)(ContextAwareToggle, { eventKey: '0', setActiveKey: setActiveKey, title: title }), (0, jsx_runtime_1.jsx)(DeleteSection, { handleDelete: onDelete, className: classNameIcon })] }), (0, jsx_runtime_1.jsx)(Accordion_1.default.Collapse, { eventKey: '0', className: 'rounded-5', children: (0, jsx_runtime_1.jsxs)(Card_1.default.Body, { className: 'px-3 py-4 mx-3 my-2 rounded-5 secondary-color', children: [(0, jsx_runtime_1.jsx)(Card_1.default.Subtitle, { className: 'subtitle subtitle--spacing', children: subtitle }), (0, jsx_runtime_1.jsx)(Card_1.default.Text, { className: 'text', children: description })] }) })] }) }));
});
exports.default = AccElement;
