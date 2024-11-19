import React from 'react';

const MenuItem = ({ text, onClick }) => {
    return(
        <>
            <div onClick={onClick} className='menu__item pointer subtitle'>{text}</div>
        </>
    )
}

export default MenuItem;