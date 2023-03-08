import React from 'react';
import styles from './style.module.scss';

import AfterFooter from './AfterFooter';

const Footer: React.FC = () => {
    return (
        <section className='bg-[#0F0F0F]'>
            <div className='container mx-auto min-h-screen py-[200px]'>
                <div className={styles.line} />
                <div className='py-[128px]'>
                    <h1 className={styles.footerh1}>
                        <div className=''>
                            <div>ЗАПИСАТЬСЯ</div>
                        </div>
                        <div className=''>
                            <div>НА СЕАНС</div>
                        </div>
                    </h1>
                    <div className={styles.par}>
                        <p>
                            зачем ждать, <br /> если можно сейчас?
                        </p>
                    </div>
                </div>
                <div className={styles.line} />
                <AfterFooter />
            </div>
        </section>
    );
};

export default Footer;
