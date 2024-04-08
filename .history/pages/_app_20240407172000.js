import '@/styles/globals.css';
import { KoHo, Nunito } from 'next/font/google';

export const koho = KoHo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-koho',
});

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${koho.variable} ${nunito.variable}`}>
    <Component {...pageProps} />
    </main>
  )


}
