import React from 'react';

const InputsGroup = ({ deleteSection, addSection, inputValues, onInputChange }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onInputChange(name, value);
    };

    return (
        <div className='container__wrap section rounded-4 py-3 mb-3 d-flex flex-column position-relative'>
            <div className='mx-4 my-1'>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Title' 
                    aria-label='Example text with button addon' 
                    aria-describedby='button-addon1'
                    name='title'
                    value={inputValues.title}
                    onChange={handleInputChange} />
            </div>
            <div className='mx-4 my-1'>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Subtitle' 
                    aria-label='Example text with button addon' 
                    aria-describedby='button-addon1'
                    name='subtitle'
                    value={inputValues.subtitle}
                    onChange={handleInputChange} />
            </div>
            <div className='mx-4 my-1'>
                <textarea 
                    className='form-control' 
                    placeholder='Description' 
                    id='floatingTextarea'
                    name='description'
                    value={inputValues.description}
                    onChange={handleInputChange} />
            </div>
            <div className='mx-4 mt-1 mt-2 d-flex justify-content-center'>
                <button onClick={deleteSection} type='button' className='btn btn-warning me-2'>Delete</button>
                <button onClick={addSection} type='button' className='btn btn-success'>Add</button>
            </div>
        </div>
    )
}

export default InputsGroup;