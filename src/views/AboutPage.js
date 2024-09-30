import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import photo from '../assets/img/about.png';
import triangle from '../assets/img/Triangles.png';
import grid from '../assets/img/Grid.png';
import Contact from '../components/Contact';

const AboutPage = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/download');
    }
    const handleMouseMove = (event) => {
        const container = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - container.left;
        const mouseY = event.clientY - container.top;
        const oppositeX = (container.width / 2 - mouseX) * 0.03;
        const oppositeY = (container.height / 2 - mouseY) * 0.03; 
        setPosition({ x: oppositeX, y: oppositeY });
      };
    return (
        <>
            <div className='header__container'>
                <div className='container'>
                    <div className='logo'>
                        <svg xmlns='http://www.w3.org/2000/svg'
                            width='100'
                            height='100'
                            viewBox='0 0 15800 11000'>
                            <path fill='#000' d='M13147 6720c-554,2411 -2713,4208 -5291,4208 -2573,0 -4728,-1790 -5287,-4192l867 0c526,1910 2275,3313 4352,3313 2083,0 3836,-1411 4357,-3330l1004 0z' />
                            <path fill='#000' d='M7856 49c2559,0 4704,1770 5278,4153l-1027 0c-563,-1852 -2283,-3200 -4319,-3200 -2042,0 -3767,1356 -4324,3216l-889 0c568,-2391 2717,-4169 5282,-4169z' />
                            <path fill='#000' d='M10696 6710c-32,96 -67,190 -107,282 -191,439 -456,803 -793,1094 -337,289 -701,489 -1093,601 -392,110 -1072,166 -2040,166l-1710 0 0 -2142 1415 0 0 883 659 0c650,0 1121,-68 1414,-204 291,-135 530,-362 715,-679l1540 0z' />
                            <path fill='#000' d='M6368 3283l0 941 -1415 0 0 -2191 1684 0c1086,0 1892,123 2421,368 527,245 963,642 1304,1195 117,188 213,387 290,597l-1559 0c-89,-137 -196,-261 -320,-373 -399,-358 -1041,-537 -1924,-537l-482 0z' />
                            <path fill='#000' d='M65 4517l440 0c284,0 494,35 632,106 138,70 251,185 341,344 89,159 134,344 134,556 0,151 -25,289 -75,416 -50,126 -119,231 -207,315 -88,83 -183,141 -285,173 -102,32 -280,48 -533,48l-447 0 0 -1957zm370 360l0 1235 172 0c170,0 293,-20 369,-59 77,-39 139,-105 188,-197 48,-92 73,-206 73,-341 0,-208 -58,-369 -173,-483 -104,-103 -272,-154 -502,-154l-126 0zm2451 -409c276,0 513,100 712,301 199,200 298,445 298,733 0,286 -98,527 -294,725 -196,198 -434,297 -713,297 -293,0 -536,-102 -730,-305 -194,-203 -291,-444 -291,-724 0,-187 45,-359 135,-516 90,-157 214,-281 372,-373 158,-92 328,-138 511,-138zm-5 365c-180,0 -331,63 -453,189 -123,126 -184,286 -184,480 0,216 77,387 231,513 120,99 257,148 413,148 175,0 325,-64 448,-192 124,-128 185,-285 185,-472 0,-186 -62,-344 -187,-473 -124,-129 -275,-193 -453,-193zm1220 -316l364 0 283 1249 348 -1249 308 0 355 1249 283 -1249 364 0 -443 1957 -355 0 -360 -1265 -353 1265 -350 0 -444 -1957zm2596 0l352 0 841 1288 0 -1288 370 0 0 1957 -355 0 -838 -1284 0 1284 -370 0 0 -1957zm2005 0l370 0 0 1602 546 0 0 354 -916 0 0 -1957zm2119 -49c276,0 513,100 712,301 199,200 298,445 298,733 0,286 -98,527 -294,725 -196,198 -434,297 -713,297 -293,0 -536,-102 -730,-305 -194,-203 -291,-444 -291,-724 0,-187 45,-359 135,-516 90,-157 214,-281 372,-373 158,-92 328,-138 511,-138zm-5 365c-180,0 -331,63 -453,189 -123,126 -184,286 -184,480 0,216 77,387 231,513 120,99 257,148 413,148 175,0 325,-64 448,-192 124,-128 185,-285 185,-472 0,-186 -62,-344 -187,-473 -124,-129 -275,-193 -453,-193zm1965 -316l374 0 751 1957 -386 0 -152 -403 -800 0 -156 403 -386 0 756 -1957zm188 520l-265 674 528 0 -263 -674zm1229 -520l440 0c284,0 494,35 632,106 138,70 251,185 341,344 89,159 134,344 134,556 0,151 -25,289 -75,416 -50,126 -119,231 -207,315 -88,83 -183,141 -285,173 -102,32 -280,48 -533,48l-447 0 0 -1957zm370 360l0 1235 172 0c170,0 293,-20 369,-59 77,-39 139,-105 188,-197 48,-92 73,-206 73,-341 0,-208 -58,-369 -173,-483 -104,-103 -272,-154 -502,-154l-126 0z' />
                        </svg>
                    </div>
                </div>

            </div>
            <div className='container'>
                <div className='about d-flex justify-content-between'>
                    <div 
                        onMouseMove={handleMouseMove}className='about__content' >
                        <h2 className='about__title'>An important <span className='about__word'>tool</span> for your business</h2>
                        <p className='about__description'>An accessible tool for generating data with the possibility of further downloading.</p>
                        <ul className='about__list'>
                            <li className='about__list-item'>No download limits</li>
                            <li className='about__list-item'>Different formats available</li>
                            <li className='about__list-item'>Ability to independently form the order of data</li>
                        </ul>
                        <Button
                            onClick={handleClick}
                            className='about__button'
                            variant='secondary'
                            size='lg'>Discover the tool</Button>
                    </div>
                    <div className='about__photoes'>
                        <Image className='about__photo' src={photo} />
                        <Image
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px) rotate(-30deg)`,
                                transition: 'transform 0.1s ease'}}
                            className='about__triangle' 
                            src={triangle} />
                        <Image
                            style={{
                                transform: `translate(${-position.x}px, ${-position.y}px) rotate(-30deg)`,
                                transition: 'transform 0.1s ease'}} 
                            className='about__grid' 
                            src={grid} />
                    </div>
                </div>
            </div>
            <div className='container'>
                <Contact />
            </div>

        </>
    )
}

export default AboutPage;