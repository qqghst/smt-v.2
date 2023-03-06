import React from 'react';
import styles from './style.module.scss';

const Navbar: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto fixed flex flex-row justify-between items-center py-[40px]'>
                <div>
                    <a
                        className='text-3xl text-white'
                        href='#'>
                        SORRY MOM TATTOO
                    </a>
                </div>
                <div className='text-white text-[13.33px] flex flex-row justify-between gap-[180px]'>
                    <a
                        className='underline'
                        href='#'>
                        ЗАПИСАТЬСЯ НА СЕАНС
                    </a>
                    <p>+7 (909) 399-12-45</p>
                    <ul className='flex flex-col'>
                        <li>О СТУДИИ</li>
                        <li>РАБОТЫ</li>
                        <li>УСЛУГИ</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
