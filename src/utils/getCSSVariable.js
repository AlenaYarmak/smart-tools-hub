const getCSSVariable = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

export default getCSSVariable;