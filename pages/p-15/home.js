import Head from "next/head";
import Center from "../../components/p-15/Center";
import Sidebar from "../../components/p-15/Sidebar";
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
        <div>{/* Player */}</div>
      </div>
    </div>
  );
};

export default home;
