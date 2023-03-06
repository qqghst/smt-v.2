import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

import {TattoServices, TattoServices2, TattoServices3, TattoServices4} from '../../assets/index'

import gsap from 'gsap';

interface IServiceItem {
    title: string;
    subtitle: string;
}

const ServiceItem: React.FC<IServiceItem> = ({ title, subtitle }) => {
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
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
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
                        src={TattoServices}
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
