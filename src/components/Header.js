import React from 'react';
import ButtonFormat from './ButtonFormat';

const Header = ({ mockedData }) => {
    return(
        <div className='header'>
            <div className='container__wrap d-flex justify-content-end'>
                <ButtonFormat mockedData={mockedData}/>
            </div>
        </div>
    )
}

export default Header;