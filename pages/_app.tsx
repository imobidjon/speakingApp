import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-[390px] px-3 h-screen">
      <Component {...pageProps} />
      <NextNProgress color="#007AFF" />
    </div>
  );
}
