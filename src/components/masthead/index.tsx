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
import MastheadSquare from 'public/masthead-square.webp';

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
            <Navbar />
            <section className='bg-[#0F0F0F] min-h-screen flex flex-col justify-center items-center relative'>
                <div className='px-[40px] mx-auto text-center flex-1 flex items-center justify-center flex-col'>
                    <div className='px-[40px] absolute right-0 left-0 top-[40%]'>
                        <h1 className='text-white text-[27.65px] md:text-[9.2vw]'>
                            SORRY MOM TATTOO
                        </h1>
                    </div>
                </div>
                <div className='container mx-auto flex flex-row justify-between pb-[40px] text-white'>
                    <div className='flex flex-col justify-end'>
                        <h3 className='text-[40px] w-[450px] text-white pb-[40px]'>
                            Lorem ipsum dolor sit amet consectetur
                        </h3>
                        <p className='text-[13.3px] text-white w-[400px] leading-[150%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsum aspernatur id, fugiat, assumenda aut
                            corporis nemo itaque doloribus, est deserunt
                            eligendi sapiente.kjdaskldjaksldjjfklsfjlsjhdfwejhfweljf aklsdjlasdh
                        </p>
                    </div>
                    <div>
                        <Image
                            className='w-[650px] h-[250px]'
                            src={MastheadSquare}
                            alt='bg-image'
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Masthead;
