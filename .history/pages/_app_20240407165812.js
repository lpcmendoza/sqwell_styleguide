import '@/styles/globals.css';
import { KoHo, Nunito } from 'next/font';

export const koho = KoHo({
  subsets: ['latin'],
  display: 'swap',
  weights: ['400', '500', '600', '700']
});

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weights: ['400', '700']
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
