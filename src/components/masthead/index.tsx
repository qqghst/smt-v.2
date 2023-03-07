// import React from 'react';
// import Image from 'next/image';
// import styles from './style.module.scss';

// import BgImage from '../../assets/masthead-img.jpg';

// const Masthead: React.FC = () => {
//     return (
//         <section className='bg-black'>
//             {/* <Image
//                 src={BgImage}
//                 alt='background-image'
//                 className="object-center object-cover pointer-events-none"

//             /> */}
//             <div className='container mx-auto min-h-screen flex justify-center items-center'>
//                 <h1 className='text-[142.66px] text-white flex justify-center items-center'>
//                     SORRY MOM TATTOO
//                 </h1>
//             </div>
//             <div className='container mx-auto text-white flex flex-row justify-between'>
//                 <p>Листай вниз</p>
//                 <p>Тату студия, Элиста</p>
//                 <p>arrow</p>
//             </div>
//         </section>
//     );
// };

// export default Masthead;

import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

import BgImage from 'public/bg.webp';

import { AiOutlineArrowDown } from 'react-icons/ai';
import { Cormorant_Garamond } from 'next/font/google';
import Navbar from '../navbar';

export const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500'],
});

const Masthead: React.FC = () => {
    return (
        <>
            <div className='relative'>
                <Image
                    src={BgImage}
                    alt='bgImage'
                    layout='fill'
                    className='object-center object-cover pointer-events-none'
                />
                <Navbar />
                <section className='relative z-1 bg-center min-h-screen flex flex-col justify-center items-center'>
                    <div className='text-center flex-1 flex items-center justify-center flex-col'>
                        <div className='pt-[16px] relative'>
                            <h1 className=' text-[27.65px] md:text-[33.18px]'>
                                <div>
                                    <div className={`${cormorantGaramond.className} ${styles.title}`}>SORRY</div>
                                </div>
                                <div>
                                    <div className={`${cormorantGaramond.className} ${styles.title}`}>MOM TATTOO</div>
                                </div>
                            </h1>
                        </div>
                    </div>
                    <div className='container mx-auto flex flex-row justify-between pb-[32px] text-white'>
                        <p className='text-[13.33px] font-light'>ЛИСТАЙ ВНИЗ</p>
                        <p className='text-[13.33px] font-light'>ТАТУ СТУДИЯ, ЭЛИСТА</p>
                        <AiOutlineArrowDown size={'24px'} className='animate-bounce'/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Masthead;


