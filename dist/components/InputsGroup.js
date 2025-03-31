"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InputsGroup = ({ deleteSection, addSection, inputValues, onInputChange }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onInputChange(name, value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'container__wrap section rounded-4 py-3 mb-3 d-flex flex-column position-relative', children: [(0, jsx_runtime_1.jsx)("div", { className: 'mx-4 my-1', children: (0, jsx_runtime_1.jsx)("input", { type: 'text', className: 'form-control', placeholder: 'Title', "aria-label": 'Example text with button addon', "aria-describedby": 'button-addon1', name: 'title', value: inputValues.title, onChange: handleInputChange }) }), (0, jsx_runtime_1.jsx)("div", { className: 'mx-4 my-1', children: (0, jsx_runtime_1.jsx)("input", { type: 'text', className: 'form-control', placeholder: 'Subtitle', "aria-label": 'Example text with button addon', "aria-describedby": 'button-addon1', name: 'subtitle', value: inputValues.subtitle, onChange: handleInputChange }) }), (0, jsx_runtime_1.jsx)("div", { className: 'mx-4 my-1', children: (0, jsx_runtime_1.jsx)("textarea", { className: 'form-control', placeholder: 'Description', id: 'floatingTextarea', name: 'description', value: inputValues.description, onChange: handleInputChange }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'mx-4 mt-1 mt-2 d-flex justify-content-center', children: [(0, jsx_runtime_1.jsx)("button", { onClick: deleteSection, type: 'button', className: 'btn btn-warning me-2', children: "Delete" }), (0, jsx_runtime_1.jsx)("button", { onClick: addSection, type: 'button', className: 'btn btn-success', children: "Add" })] })] }));
};
exports.default = InputsGroup;
