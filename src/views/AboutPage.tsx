import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import HeaderBlock from '../components/HeaderBlock';
import photo from '../assets/img/about.png';
import triangle from '../assets/img/Triangles.png';
import grid from '../assets/img/Grid.png';
import Contact from '../components/Contact';
import getCSSVariable from '../utils/getCSSVariable';
import HeaderMain from '../components/HeaderMain';

const AboutPage = () => {
    const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const mainColor = getCSSVariable('--main-color');
    const hoverTitleColor = getCSSVariable('--button-color');
    const navigate = useNavigate();
    const handleNavigateDownload = () => {
        navigate('/download');
    }
    const handleNavigateTools = () => {
        navigate('/discover-tools');
    }
    const handleMouseMove = (event: any) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setGradientPosition({ x, y });

        const container = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - container.left;
        const mouseY = event.clientY - container.top;
        const oppositeX = (container.width / 2 - mouseX) * 0.03;
        const oppositeY = (container.height / 2 - mouseY) * 0.03;
        setPosition({ x: oppositeX, y: oppositeY });
    };

    return (
        <>
            <HeaderMain />
            <div className='container'>
                <div className='about d-flex justify-content-between'>
                    <div
                        onMouseMove={handleMouseMove}
                        className='about__content' >
                        <h2
                            className='about__title'
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            style={{
                                position: 'relative',
                                display: 'inline-block',
                                color: isHovering ? 'transparent' : mainColor,
                                backgroundImage: isHovering
                                    ? `radial-gradient(circle 150px at ${gradientPosition.x}px ${gradientPosition.y}px, ${hoverTitleColor}, ${mainColor})`
                                    : 'none',
                                WebkitBackgroundClip: isHovering ? 'text' : 'unset',
                                transition: 'background-position 0.1s ease',
                                backgroundClip: isHovering ? 'text' : 'unset',
                                cursor: 'context-menu'
                            }}
                        >
                            An important tools for your business</h2>
                        <p className='about__description'>An accessible tool for generating data with the possibility of further downloading.</p>
                        <ul className='about__list'>
                            <li className='about__list-item'>No download limits</li>
                            <li className='about__list-item'>Different formats available</li>
                            <li className='about__list-item'>Ability to independently form the order of data</li>
                        </ul>
                        <Button
                            onClick={handleNavigateDownload}
                            className='about__button'
                            variant='primary'
                            size='lg'>Discover the tool
                        </Button>
                        <p className='about__description'>Convenient tool for selecting colors anywhere in the loaded image.</p>
                        <ul className='about__list'>
                            <li className='about__list-item'>Fast image loading</li>
                            <li className='about__list-item'>Convenient dynamic color selection tool</li>
                            <li className='about__list-item'>Absolute data protection</li>
                        </ul>
                        <Button
                            onClick={handleNavigateTools}
                            className='about__button'
                            variant='primary'
                            size='lg'>Discover the tool
                        </Button>
                    </div>
                    <div className='about__photoes'>
                        <Image className='about__photo' src={photo} />
                        <Image
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px) rotate(-30deg)`,
                                transition: 'transform 0.1s ease'
                            }}
                            className='about__triangle'
                            src={triangle} />
                        <Image
                            style={{
                                transform: `translate(${-position.x}px, ${-position.y}px) rotate(-30deg)`,
                                transition: 'transform 0.1s ease'
                            }}
                            className='about__grid'
                            src={grid} />
                    </div>
                </div>
            </div>
            <div className='contact__wrapper'>
                <div className='container'>
                    <Contact />
                </div>
            </div>
        </>
    )
}

export default AboutPage;