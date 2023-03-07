import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import {
    TattoServices,
    TattoServices2,
    TattoServices3,
    TattoServices4,
} from '../../assets/index';
import gsap from 'gsap';

const images = [
    { id: 1, src: TattoServices },
    { id: 2, src: TattoServices2 },
    { id: 3, src: TattoServices3 },
    { id: 4, src: TattoServices4 },
];

const Loader = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            gsap.fromTo(containerRef.current, { opacity: 1 }, { opacity: 0 });
        }, 6000);
    }, []);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 1200);

        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    return (
        <div>
            <div
                ref={containerRef}
                className='bg-black'>
                <div className='container mx-auto min-h-screen flex justify-center items-center'>
                    <div className={styles.imageСontainer}>
                        {images.map((image, index) => (
                            <div
                                key={image.id}
                                className={`${styles.image} ${
                                    index === currentImageIndex
                                        ? styles.active
                                        : ''
                                }`}>
                                <Image
                                    src={image.src}
                                    alt=''
                                    width={500}
                                    height={500}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
