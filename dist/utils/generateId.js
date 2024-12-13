"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateId = () => {
    return Date.now().toString() + Math.random().toString(12).substr(2, 9);
};
exports.default = generateId;
