const getCSSVariable = (variable: any) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

export default getCSSVariable;