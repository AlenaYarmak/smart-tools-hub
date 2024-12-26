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
                <div className='border border-warning mt-5 d-flex'>
                    <div className='canvas-wrapper w-50'>
                        <canvas
                            ref={canvasRef}
                            width={400}
                            height={400}
                            onMouseMove={handleMouseMove}>
                        </canvas>
                    </div>
                    <div className='color__wrapper d-flex flex-column border border-warning w-50'>
                        <div className='color__container'>
                            
                        </div>
                        <div className='color__upload'>
                            <Button size='lg' className='btn btn-dark'>
                                Use your image
                            </Button>
                            <p>You can upload your image.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescribePage;