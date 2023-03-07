import '@/styles/globals.scss';
import '@/styles/reset.scss';
import type { AppProps } from 'next/app';

import { Inter } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400'],
});

export const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['500'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    );
}

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
