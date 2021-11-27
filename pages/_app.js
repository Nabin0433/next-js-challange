import { SessionProvider } from "next-auth/react";
import "tailwindcss/tailwind.css";
import "../components/p-7/mobiles/test.css";
import "../global/styles/global.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
