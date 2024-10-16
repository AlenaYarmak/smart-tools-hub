import React from 'react';
import ButtonFormat from './ButtonFormat';
import ReturnButton from '../components/ReturnButton';

const Header = ({ mockedData, clickFunction }) => {
    return(
        <div className='header header__wrap'>
            <ReturnButton className='return-button' onClick={clickFunction} />
            <div className='container__wrap d-flex justify-content-end'>
                <ButtonFormat mockedData={mockedData}/>
            </div>
        </div>
    )
}

export default Header;