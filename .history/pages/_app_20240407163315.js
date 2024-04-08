import "@/styles/globals.css";
import type { AppProps } from 'next/app';
import { KoHo } from '@next/font/google';
import { Nunito } from '@next/font/google';

const koho = KoHo({
  subsets: ['latin'],
  weight: ['400', '500' ,'600', '700'],
})

const nunito = Nunito({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={Roboto.className} className={Nunito.className}>
      <Component {...pageProps} />;
    </main>
  )
}
