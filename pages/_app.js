import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import "../components/p-7/mobiles/test.css";
import "../global/styles/global.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
