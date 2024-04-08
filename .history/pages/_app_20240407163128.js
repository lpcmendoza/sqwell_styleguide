import "@/styles/globals.css";
import type { AppProps } from 'next/app';
import { KoHo } from "next/font/google";
import { Nunito } from "next/font/google";

const koho = KoHo({
  subsets: ['latin'],
  weight: ['400', '500' ,'600', '700'],
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />;
    </main>
  )
}
