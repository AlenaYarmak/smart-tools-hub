import React from 'react';

const InputsGroup = ({ deleteSection, addSection }) => {
    return (
        <div className='container__wrap section rounded-4 py-3 mb-3 d-flex flex-column position-relative'>
            <div className='mx-4 my-1'>
                <input type='text' className='form-control' placeholder='Title' aria-label='Example text with button addon' aria-describedby='button-addon1' />
            </div>
            <div className='mx-4 my-1'>
                <input type='text' className='form-control' placeholder='Subtitle' aria-label='Example text with button addon' aria-describedby='button-addon1' />
            </div>
            <div className='mx-4 my-1'>
                <textarea className='form-control' placeholder='Description' id='floatingTextarea' />
            </div>
            <div className='mx-4 my-1 d-flex justify-content-center'>
                <button onClick={deleteSection} type='button' class='btn btn-warning me-2'>Delete</button>
                <button onClick={addSection} type='button' class='btn btn-success'>Add</button>
            </div>
        </div>
    )
}

export default InputsGroup;