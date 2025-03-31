"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInputsGroupController = void 0;
const react_1 = require("react");
const useInputsGroupController = () => {
    const [inputValues, setInputValues] = (0, react_1.useState)({
        title: '',
        subtitle: '',
        description: ''
    });
    const handleInputChange = (name, value) => {
        setInputValues(prevValues => (Object.assign(Object.assign({}, prevValues), { [name]: value })));
    };
    const resetInputs = () => {
        setInputValues({ title: '', subtitle: '', description: '' });
    };
    return { inputValues, handleInputChange, resetInputs };
};
exports.useInputsGroupController = useInputsGroupController;
