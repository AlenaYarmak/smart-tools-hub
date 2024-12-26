import React, { useEffect, useRef, useState } from "react";
import HeaderBlock from '../components/HeaderBlock';
import aboutImage from "../assets/img/about.png";
import Button from 'react-bootstrap/Button';

const DescribePage = () => {
    const [color, setColor] = useState("None");
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = aboutImage;
    }, []);

    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
            if (!ctx) return;
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
            setColor(color);
            console.log(color);
        }
    }

    return (
        <>
            <HeaderBlock />
            <div className='container'>
                <h2 className='title--fs mt-5'>Pick color from image</h2>
                <div className='mt-5 d-flex'>
                    <div className='canvas-wrapper w-50'>
                        <canvas
                            ref={canvasRef}
                            width={400}
                            height={400}
                            onMouseMove={handleMouseMove}>
                        </canvas>
                    </div>
                    <div className='color__wrapper d-flex flex-column w-50'>
                        <div className='color__container pb-5 pt-3 rounded shadow'>
                            <h5 className='color__title pb-2 d-flex justify-content-center border-bottom border-light'>Colors</h5>
                            <div className='color-wrapper d-flex justify-content-center'>
                                <div className='color py-4 w-75 border border-light rounded'
                                    style={{'backgroundColor': `${color}`}}></div>
                            </div>
                            <div className='hex-wrapper d-flex justify-content-center'>
                                <p className='m-0 w-75 px-3 py-3 mt-3 border border-light rounded'>HEX: </p>
                            </div>
                            <div className='rgb-wrapper d-flex justify-content-center'>
                                <p className='m-0 w-75 px-3 py-3 mt-3 border border-light rounded'>RGB: </p>
                            </div>
                        </div>
                        <div className='color__upload d-flex flex-column mt-3 py-5 shadow rounded'>
                            <Button size='lg' className='btn btn-dark mx-auto'>
                                Use your image
                            </Button>
                            <p className='text-center mt-3 mb-0'>You can upload your image.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescribePage;