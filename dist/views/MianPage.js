"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_1 = __importDefault(require("../components/Header"));
const MenuItem_1 = __importDefault(require("../components/MenuItem"));
const AccElement_1 = __importDefault(require("../components/AccElement"));
const AddSection_1 = __importDefault(require("../components/AddSection"));
const InputsGroup_1 = __importDefault(require("../components/InputsGroup"));
const MainPageController_1 = require("../controllers/MainPageController");
const MainPage = () => {
    const { mockedData, addSection, refs, handleScrollTo, addNewSection, handleAddSection, handleDeleteSection, handleClick, inputValues, handleInputChange, emptyDeleteSection } = (0, MainPageController_1.useMainPageController)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'header__container', children: (0, jsx_runtime_1.jsx)(Header_1.default, { mockedData: mockedData, handleClick: handleClick }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'container', children: [(0, jsx_runtime_1.jsx)("div", { className: 'd-flex flex-column menu__wrapper', children: mockedData.map((item, index) => ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { onClick: () => handleScrollTo(index), text: item.title }, index))) }), (0, jsx_runtime_1.jsx)("div", { className: 'container__wrap m-top', children: mockedData.map((item, index) => ((0, jsx_runtime_1.jsx)(AccElement_1.default, { ref: refs.current[index], index: index, subtitle: item.subtitle, description: item.description, title: item.title, onDelete: () => handleDeleteSection(item.id) }, item.id))) }), addSection ? ((0, jsx_runtime_1.jsx)(InputsGroup_1.default, { onInputChange: handleInputChange, inputValues: inputValues, deleteSection: emptyDeleteSection, addSection: handleAddSection })) : ((0, jsx_runtime_1.jsx)(AddSection_1.default, { clickSection: addNewSection }))] })] }));
};
exports.default = MainPage;
