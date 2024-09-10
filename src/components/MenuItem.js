import React from 'react';

const MenuItem = ({ text }) => {
    return(
        <>
            <div className='menu__item pointer subtitle'>{text}</div>
        </>
    )
}

export default MenuItem;