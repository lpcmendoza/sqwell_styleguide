import '@/styles/globals.css';
import { KoHo, Nunito } from 'next/font/google';

export const koho = KoHo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
        html {
          font-family: var(--font-inter);
        }
        
        h1 {
          font-family: var(--font-roboto-mono);
        }

    `}</style>
    <Component {...pageProps} />
  </>
  )

}
