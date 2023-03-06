import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

import { TattoServices } from '@/assets';
import Button from '@/ui/buttonCircle';

const Works: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto py-[200px]'>
                <div>
                    <div className='flex flex-row justify-between items-center'>
                        <div>
                            <Image
                                src={TattoServices}
                                alt='tattoo-image'
                                width={800 / 2}
                                // height={1200 / 2}
                            />
                        </div>

                        <div className='flex flex-row items-end'>
                            <Image
                                className=''
                                src={TattoServices}
                                alt='tattoo-image'
                                width={400 / 2}
                                // height={600 / 2}
                            />
                            <Image
                                src={TattoServices}
                                alt='tattoo-image'
                                width={700 / 2}
                                // height={1000 / 2}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-end'>
                        <Image
                            src={TattoServices}
                            alt='tattoo-image'
                            width={500 / 2}
                            // height={1000 / 2}
                        />
                        <Image
                            src={TattoServices}
                            alt='tattoo-image'
                            width={800 / 2}
                            // height={1000 / 2}
                        />
                    </div>
                </div>
            </div>

            <div>
                <Image
                    src={TattoServices}
                    alt='tattoo-image'
                    width={800 / 2}
                    // layout='fill'
                    // objectFit='contain'
                    // height={1000 / 2}
                    style={{ height: '100vh', width: '100vw' }}
                />
            </div>

            <div className='container mx-auto'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col items-start'>
                        <Image
                            className=''
                            src={TattoServices}
                            alt='tattoo-image'
                            width={400 / 2}
                            // height={600 / 2}
                        />
                        <Image
                            src={TattoServices}
                            alt='tattoo-image'
                            width={700 / 2}
                            // height={1000 / 2}
                        />
                    </div>
                    <div>
                        <Image
                            src={TattoServices}
                            alt='tattoo-image'
                            width={800 / 2}
                            // height={1200 / 2}
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Button type='button'>СМОТРЕТЬ ВСЕ</Button>
            </div>
        </section>
    );
};

export default Works;
