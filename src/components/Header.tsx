import React from 'react';
import ButtonFormat from './ButtonFormat';
import ReturnButton from './ReturnButton';
import { MockedDataItem } from '../types/MockedDataItem';


const Header = ({ mockedData, handleClick }: {mockedData: any[]; handleClick: () => void}) => {
    return(
        <div className='header header__wrap'>
            <ReturnButton className='return-button' onClick={handleClick} />
            <div className='container__wrap d-flex justify-content-end'>
                <ButtonFormat mockedData={mockedData}/>
            </div>
        </div>
    )
}

export default Header;