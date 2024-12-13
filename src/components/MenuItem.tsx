import React from 'react';

type MenuItemProps = {
    text: string; 
    onClick: () => void;
};

const MenuItem:React.FC<MenuItemProps> = ({ text, onClick }) => {
    return(
        <>
            <div onClick={onClick} className='menu__item pointer subtitle'>{text}</div>
        </>
    )
}

export default MenuItem;