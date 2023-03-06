import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';

import Navbar from '@/components/navbar';
import Masthead from '@/components/masthead';
import About from '@/components/about';
import Services from '@/components/services';
import Works from '@/components/works';
import Footer from '@/components/footer';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    return (
        <>
            <Navbar />
            <Masthead />
            <About />
            <Services />
            <Works />
            <Footer />
        </>
    );
}
