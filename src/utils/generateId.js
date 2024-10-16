const generateId = () => {
    return Date.now().toString() + Math.random().toString(12).substr(2, 9);
}

export default generateId;