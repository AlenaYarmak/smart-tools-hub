import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import photo from '../assets/img/about.png';

const AboutPage = () => {
    return (
        <div className='container'>
            <div className='about d-flex justify-content-between'>
                <div className='about__content'>
                    <h2 className='about__title'>An important tool for your business</h2>
                    <p className='about__description'>An accessible tool for generating data with the possibility of further downloading.</p>
                    <ul className='about__list'>
                        <li className='about__list-item'>No download limits</li>
                        <li className='about__list-item'>Different formats available</li>
                        <li className='about__list-item'>Ability to independently form the order of data</li>
                    </ul>
                    <Button className='about__button' variant="secondary" size="lg">Discover the tool</Button>
                </div>
                <Image className='about__photo' src={photo} rounded />
            </div>
        </div>
    )
}

export default AboutPage;