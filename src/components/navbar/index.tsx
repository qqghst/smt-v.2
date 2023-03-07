import React, { useState } from 'react';
import Link from 'next/link';
import styles from './style.module.scss';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);

    return (
        <section className='relative z-10'>
            <div className='container mx-auto flex flex-row justify-between items-center py-[40px] absolute top-0 left-0 right-0 '>
                <div>
                    <a
                        className='text-3xl text-white'
                        href='#'>
                        SORRY MOM TATTOO
                    </a>
                </div>
                <div  className={
                        nav
                            ? [styles.menu, styles.active].join(' ')
                            : [styles.menu, ''].join(' ')
                    }>
                    <div className={styles.nav}>
                        <Link
                            className='underline'
                            href='https://www.instagram.com/sorrymom08/'>
                            ЗАПИСАТЬСЯ НА СЕАНС
                        </Link>
                        <a href={`tel:${'+7 (909) 399-12-45'}`}>
                            +7 (909) 399-12-45
                        </a>
                        <ul className='flex flex-col gap-[32px] xl:gap-[8px]'>
                            <li className={styles.hoverLink}>
                                <Link href='#'>О СТУДИИ</Link>
                            </li>
                            <li className={styles.hoverLinkSmaller}>
                                <Link href='#'>РАБОТЫ</Link>
                            </li>
                            <li className={styles.hoverLinkSmaller}>
                                <Link href='#'>УСЛУГИ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    onClick={() => setNav(!nav)}
                    className={styles.mobileBtn}>
                    {nav ? (
                        <AiOutlineClose size={40} color={'white'}/>
                    ) : (
                        <AiOutlineMenu size={40} color={'white'}/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Navbar;
