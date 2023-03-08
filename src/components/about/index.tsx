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
                        scrub: 0.1,
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
        <section className='bg-[#0F0F0F]'>
            <div className='container mx-auto py-[200px] '>
                <Title>о студии</Title>
                <div className={`${styles.scrollingText} my-[56px]`}>
                    <p>
                        Flirty Flowers is a blog about flowers and thee floralj
                        designers who make them into art. Creativity and the art
                        of ‘making’ require dialogue. The full purpose of the
                        Flirty Flowers blog is to encourage and inspire. We
                        value art, we value insight, and we value opinion.
                    </p>
                </div>
                <Button type='button'>читать больше</Button>
            </div>
        </section>
    );
};

export default About;
