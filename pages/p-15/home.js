import Head from "next/head";
import Center from "../../components/p-15/Center";
import Sidebar from "../../components/p-15/Sidebar";
import { getSession } from "next-auth/react";
import Player from "../../components/p-15/Player";
const home = () => {
  return (
    <div>
      <Head>
        <title>Spotify-clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="bg-black h-screen overflow-hidden">
        <main className="flex">
          <Sidebar />
          <Center />
        </main>
        <div className="sticky bottom-0">
          <Player />
        </div>
      </div>
    </div>
  );
};

export default home;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
