import { useState } from 'react';

export const useInputsGroupController = () => {
    const [inputValues, setInputValues] = useState<Record<string, string>>({
        title: '',
        subtitle: '',
        description: ''
    })

    const handleInputChange = (name: string, value: string) => {
        setInputValues(prevValues => ({
          ...prevValues,
          [name]: value
        }));
    };

    const resetInputs = () => {
        setInputValues({ title: '', subtitle: '', description: '' });
    };
    
    return { inputValues, handleInputChange, resetInputs };
}