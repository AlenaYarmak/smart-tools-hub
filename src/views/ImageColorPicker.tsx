import React, { useEffect, useRef, useState } from 'react';
import HeaderBlock from '../components/HeaderBlock';
import aboutImage from '../assets/img/about.png';
import Button from 'react-bootstrap/Button';

const ImageColorPicker = () => {
    const [color, setColor] = useState([98, 171, 100]);
    const [staticColor, setStaticColor] = useState([255, 255, 255]);
    const subcanvasRef = useRef<HTMLCanvasElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, 400, 400);
        };
        img.src = aboutImage;
    }, []);

    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        const subcanvas = subcanvasRef.current;
        if (!canvas || !subcanvas) return;
        const ctx = canvas.getContext('2d');
        const subCtx = subcanvas.getContext('2d');
        if (!ctx || !subCtx) return;
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        console.log(mouseX, mouseY);

        if (mouseX >= 0 && mouseX < canvas.width && mouseY >= 0 && mouseY < canvas.height) {
            if (!ctx) return;
            const pixel = ctx.getImageData(mouseX, mouseY, 1, 1).data;
            const color = [pixel[0], pixel[1], pixel[2]];
            setColor(color);
        }

        const size = 10;
        const halfSize = size / 2;
        const startX = Math.max(0, mouseX - halfSize);
        const startY = Math.max(0, mouseY - halfSize);

        const drawWidth = Math.min(size, canvas.width - startX);
        const drawHeight = Math.min(size, canvas.height - startY);

        const pixelData = ctx.getImageData(mouseX, mouseY, drawWidth, drawHeight).data;

        const hasVisiblePixels = Array.from(pixelData).some((_, index) => {

            return index % 4 === 3 && pixelData[index] !== 0;
        });

        if (hasVisiblePixels) {
            subCtx.clearRect(0, 0, subcanvas.width, subcanvas.height);
            subCtx.drawImage(
                canvas,
                startX,
                startY,
                drawWidth,
                drawHeight,
                0,
                0,
                subcanvas.width,
                subcanvas.height
            );

            subcanvas.style.opacity = '1';
            subcanvas.style.position = 'absolute';
            subcanvas.style.left = `${event.clientX}px`;
            subcanvas.style.top = `${event.clientY}px`;
        } else {
            subcanvas.style.opacity = '0';
        }
    }

    const handleMouseLeave = () => {
        const subcanvas = subcanvasRef.current;
        if (subcanvas) {
            subcanvas.style.opacity = '0'; // hide subcanvas on mouse leave
        }
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = canvasRef.current;
                    if (!canvas) return;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;

                    /* calculate aspect ratio of image */
                    const imgAspectRatio = img.width / img.height;

                    let сanvasWidth = 400;
                    let сanvasHeight = 400;

                    if (imgAspectRatio > 1) {
                        сanvasWidth = 400;
                        сanvasHeight = 400 / imgAspectRatio;
                    } else {
                        сanvasHeight = 400;
                        сanvasWidth = 400 * imgAspectRatio;
                    }

                canvas.width = сanvasWidth;
                canvas.height = сanvasHeight;

                // сlear canvas and draw the resized image
                ctx.clearRect(0, 0, сanvasWidth, сanvasHeight);

                ctx.drawImage(img, 0, 0, сanvasWidth, сanvasHeight);
                };
                img.src = e.target?.result as string;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleMouseClick = () => {
        setStaticColor(color);
    }

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    }

    /* convert rgb to hex */
    const rgbToHex = (rgb: [number, number, number]): string => {
        return '#' + rgb.map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    };

    /* writeText writes the specified text to the system clipboard */
    const handleCopyRGB = () => {
        navigator.clipboard.writeText(`rgb(${staticColor.map((item) => item).toString()})`);
    }

    const handleCopyHEX = () => {
        navigator.clipboard.writeText(rgbToHex(staticColor as [number, number, number]));
    }

    return (
        <>
            <HeaderBlock />
            <div className='container'>
                <h2 className='title--fs mt-5'>Pick color from image</h2>
                <div className='mt-5 d-flex'>
                    <div className='canvas-container w-50'>
                        <div 
                            className='canvas-wrapper shadow rounded p-4'
                            style={{ display: 'inline-block', fontSize: 0 }}>
                            <canvas
                                className='canvas'
                                ref={canvasRef}
                                width={400}
                                height={400}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                onClick={handleMouseClick}>
                            </canvas>
                            <canvas
                                ref={subcanvasRef}
                                width={100}
                                height={100}
                                style={{
                                    position: 'absolute',
                                    pointerEvents: 'none',
                                    opacity: '0',
                                    transition: 'opacity 0.2s ease'
                                }}>
                            </canvas>
                        </div>
                    </div>
                    <div className='color__wrapper d-flex flex-column w-50'>
                        <div className='color__container pb-5 pt-3 rounded shadow'>
                            <h5 className='color__title pb-2 d-flex align-content-center justify-content-center border-bottom border-light'>Colors</h5>
                            <div className='color-wrapper d-flex flex-column'>
                                <div className='color__item d-flex justify-content-center'>
                                    <div className='color py-4 border border-light rounded w-75' style={{ 'backgroundColor': `rgb(${color})` }}>
                                    </div>
                                </div>
                                <div className='color__item d-flex justify-content-center'>
                                    <div className='color py-4 border border-light rounded w-75' style={{ 'backgroundColor': `rgb(${staticColor})` }}></div>
                                </div>
                            </div>
                            <div className='hex-wrapper d-flex justify-content-center'>
                                <div className='m-0 w-75 px-3 py-3 mt-3 border border-light rounded d-flex justify-content-between'>
                                    <span>HEX: {rgbToHex(staticColor as [number, number, number])}</span>
                                    <svg onClick={handleCopyHEX} xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-copy justify-content-end pointer' viewBox='0 0 16 16'>
                                        <path fill-rule='evenodd' d='M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z' />
                                    </svg>
                                </div>
                            </div>
                            <div className='rgb-wrapper d-flex justify-content-center'>
                                <div className='m-0 w-75 px-3 py-3 mt-3 border border-light rounded d-flex justify-content-between'>
                                    <span>RGB: {staticColor.map((item) => item).toString()}</span>
                                    <svg onClick={handleCopyRGB} xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-copy justify-content-end pointer' viewBox='0 0 16 16'>
                                        <path fill-rule='evenodd' d='M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z' />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='color__upload d-flex flex-column mt-3 py-5 shadow rounded'>
                            <Button
                                onClick={handleButtonClick}
                                size='lg'
                                className='btn btn-dark mx-auto'>
                                Use your image
                            </Button>
                            <input
                                type='file'
                                accept='image/*'
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                            />
                            <p className='text-center mt-3 mb-0'>You can upload your image.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageColorPicker;