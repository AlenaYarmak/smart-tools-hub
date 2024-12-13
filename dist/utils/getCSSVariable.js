"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCSSVariable = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
};
exports.default = getCSSVariable;
