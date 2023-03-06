import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

import BgImage from '../../assets/masthead-img.jpg';

const Masthead: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='z-20 container mx-auto min-h-screen flex justify-center items-center'>
                <h1 className='text-[142.66px] text-white flex justify-center items-center'>
                    SORRY MOM TATTOO
                </h1>
            </div>
            <div className='container mx-auto text-white flex flex-row justify-between'>
                <p>Листай вниз</p>
                <p>Тату студия, Элиста</p>
                <p>arrow</p>
            </div>
        </section>
    );
};

export default Masthead;
