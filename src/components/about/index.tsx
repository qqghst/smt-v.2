import React, { useEffect } from 'react';
import styles from './style.module.scss';

import Title from '@/ui/title';
import Button from '@/ui/button';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const About: React.FC = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const split = new SplitType('p', { types: 'lines' });

        function scrollGsap() {
            split.lines?.forEach((target) => {
                gsap.to(target, {
                    backgroundPositionX: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: target,
                        // markers: true,
                        scrub: 0.5,
                        start: 'top center',
                        end: 'bottom center',
                    },
                });
            });
        }

        let someDelay = gsap.delayedCall(0.2, newTriggers).pause();
        window.addEventListener('resize', () => someDelay.restart(true));

        function newTriggers() {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            });
            split.split();
            scrollGsap();
        }

        scrollGsap();
    }, []);

    return (
        <section className='bg-black'>
            <div className='container mx-auto py-[240px] '>
                <Title>
                    о студии
                </Title>
                <div className={`${styles.scrollingText} my-[56px]`}>
                    <p
                        className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab cupiditate possimus nam harum saepe ipsa minus illum
                        modi corrupti cumque. Expedita voluptatibus enim quasi,
                        eaque magni veritatis quaerat inventore recusandae?
                        upiditate possimus nam harum saepe ipsa minus illum modi
                        corrupti cumque. Expedita voluptatibus enim quasi, eaque
                        magni
                    </p>
                </div>
                <Button type='button'>читать больше</Button>
            </div>
        </section>
    );
};

export default About;

// import React, { useEffect } from 'react';
// import styles from './style.module.scss';

// import Button from '@/ui/button';

// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import SplitType from 'split-type';

// const About: React.FC = () => {
//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);
//         const split = new SplitType('p', { types: 'lines' });

//         function scrollGsap() {
//             split.lines?.forEach((target) => {
//                 gsap.to(target, {
//                     backgroundPositionX: 0,
//                     ease: 'none',
//                     scrollTrigger: {
//                         trigger: target,
//                         // markers: true,
//                         scrub: 0.5,
//                         start: 'top center',
//                         end: 'bottom center',
//                     },
//                 });
//             });
//         }

//         let someDelay = gsap.delayedCall(0.2, newTriggers).pause();
//         window.addEventListener('resize', () => someDelay.restart(true));

//         function newTriggers() {
//             ScrollTrigger.getAll().forEach((trigger) => {
//                 trigger.kill();
//             });
//             split.split();
//             scrollGsap();
//         }

//         scrollGsap();
//     }, []);

//     return (
//         <>
//             <section className='bg-[#111013]'>
//                 <div className='py-[160px] container mx-auto'>
//                     <div>
//                         <div className={styles.scrollingText}>
//                             <p>
//                                 Lorem ipsum dolor sit amet consectetur
//                                 adipisicing elit. Repellendus est adipisci
//                                 quidem provident molestiae ut voluptate illo id
//                                 excepturi. Iste repudiandae nisi dicta vel
//                                 voluptatem delectus dignissimos iusto laborum
//                                 laboriosam?
//                             </p>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default About;
