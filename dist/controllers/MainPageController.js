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
exports.useMainPageController = void 0;
const react_1 = __importStar(require("react"));
const MockDataModel_1 = require("../models/MockDataModel");
const InputsGroupController_1 = require("./InputsGroupController");
const generateId_1 = __importDefault(require("../utils/generateId"));
const react_router_dom_1 = require("react-router-dom");
const useMainPageController = () => {
    const inputsController = (0, InputsGroupController_1.useInputsGroupController)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [addSection, setAddSection] = (0, react_1.useState)(false);
    const [mockedData, setMockedData] = (0, react_1.useState)((0, MockDataModel_1.getInitialMockData)());
    const refs = (0, react_1.useRef)(mockedData.map(() => react_1.default.createRef()));
    (0, react_1.useEffect)(() => {
        sessionStorage.setItem('mockData', JSON.stringify(mockedData));
    }, [mockedData]);
    const handleClick = () => {
        navigate('/');
    };
    const addNewSection = () => {
        setAddSection(true);
    };
    const handleAddSection = () => {
        setAddSection(false);
        setMockedData((prevMockedData) => [
            ...prevMockedData,
            Object.assign(Object.assign({}, inputsController.inputValues), { id: (0, generateId_1.default)() }),
        ]);
        inputsController.resetInputs();
    };
    const handleDeleteSection = (id) => {
        setMockedData((prevMockedData) => prevMockedData.filter((item) => item.id !== id));
    };
    const handleScrollTo = (index) => {
        if (refs.current[index] && refs.current[index].current) {
            refs.current[index].current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const emptyDeleteSection = () => {
        setAddSection(false);
        inputsController.resetInputs();
    };
    return Object.assign({ 
        // State
        addSection,
        mockedData,
        refs,
        // Functions for main page actions
        handleScrollTo,
        addNewSection,
        handleAddSection,
        handleDeleteSection,
        handleClick,
        emptyDeleteSection }, inputsController);
};
exports.useMainPageController = useMainPageController;
