import React, { useEffect } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image'

import styles from './styles.module.scss';

import gsap from 'gsap';

interface IServiceItem {
    title: string;
    subtitle: string;
    imageSrc: StaticImageData;
}

const ServiceItem: React.FC<IServiceItem> = ({ title, subtitle, imageSrc }) => {
    useEffect(() => {
        const items = document.querySelectorAll('#item');

        items.forEach((el) => {
            const image = el.querySelector('#img');

            el.addEventListener('mouseenter', (e) => {
                gsap.to(image, { autoAlpha: 1 });
            });

            el.addEventListener('mouseleave', (e) => {
                gsap.to(image, { autoAlpha: 0 });
            });

            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = (e as MouseEvent).clientX - rect.left - rect.width / 2;
                const y = (e as MouseEvent).clientY - rect.top - rect.height / 2;
                gsap.set(image, { x, y, transformOrigin: 'center center' });
            });
        });
    }, []);

    return (
        <>
            <section className={styles.ul}>
                <div
                    id='item'
                    className={`${styles.li} text-white flex flex-row justify-between items-center py-[40px]`}>
                    <Image
                        id='img'
                        className={styles.img}
                        src={imageSrc}
                        alt='image'
                        width={600 / 2}
                        height={800 / 2}
                    />
                    <h3 className='text-[60px]'>{title}</h3>
                    <p className='text-[20px]'>{subtitle}</p>
                </div>
                <div className={`${styles.line}`} />
            </section>
        </>
    );
};

export default ServiceItem;
