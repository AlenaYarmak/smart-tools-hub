"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveMockData = exports.getInitialMockData = void 0;
const mockData_json_1 = __importDefault(require("../assets/data/mockData.json"));
const getInitialMockData = () => {
    const storedData = sessionStorage.getItem('mockData');
    return storedData ? JSON.parse(storedData) : mockData_json_1.default;
};
exports.getInitialMockData = getInitialMockData;
const saveMockData = (data) => {
    sessionStorage.setItem('mockData', JSON.stringify(data));
};
exports.saveMockData = saveMockData;
