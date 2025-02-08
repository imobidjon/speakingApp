import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@1..900&family=Jost:ital,wght@0,100..900;1,100..900&family=Kdam+Thmor+Pro&display=swap" rel="stylesheet" />
        <script src="https://telegram.org/js/telegram-web-app.js" />
        <script>Telegram.WebApp.ready();</script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
