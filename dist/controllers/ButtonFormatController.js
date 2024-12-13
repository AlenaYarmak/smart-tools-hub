"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const generateDocx_1 = __importDefault(require("../utils/generateDocx"));
const generatePdf_1 = __importDefault(require("../utils/generatePdf"));
const mockData_json_1 = __importDefault(require("../assets/data/mockData.json"));
const useButtonFormatController = () => {
    const [arrowStatus, setArrowStatus] = (0, react_1.useState)(false);
    const [selectedFormat, setSelectedFormat] = (0, react_1.useState)('PDF');
    const [hovered, setHovered] = (0, react_1.useState)(null);
    const openedPosition = 'rotate(0)';
    const defaultPosition = 'rotate(-180deg)';
    const showButtons = () => {
        setArrowStatus(!arrowStatus);
    };
    const handleListClick = (format) => {
        setSelectedFormat(format);
        setArrowStatus(false);
    };
    const basedStyles = 'list-group-item button__fs bg-white';
    const hoveredStyle = 'list-group-item button__fs button__fs pointer';
    const handleMouseEnter = (item) => {
        setHovered(item);
    };
    const handleMouseLeave = () => {
        setHovered(null);
    };
    return {
        arrowStatus,
        selectedFormat,
        hovered,
        basedStyles,
        hoveredStyle,
        openedPosition,
        defaultPosition,
        showButtons,
        handleListClick,
        generatePdf: () => (0, generatePdf_1.default)(mockData_json_1.default),
        generateDocx: () => (0, generateDocx_1.default)(mockData_json_1.default),
        handleMouseEnter,
        handleMouseLeave
    };
};
exports.default = useButtonFormatController;
