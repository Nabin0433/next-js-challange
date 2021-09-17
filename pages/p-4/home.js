import Head from "next/head";
import Image from "next/image";
const home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <div className="w-screen overflow-hidden">
          <div className="absolute md:w-full md:h-full right-12 z-0">
            <Image
              className="hover:scale-105 transition duration-200 cursor-move"
              src={"/assets/images/p-4/shadow.png"}
              alt={"Trafalgar"}
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div className="absolute flex md:w-[1400px] md:h-full right-12 z-10">
            <Image
              className="hover:scale-105 transition duration-200 cursor-move"
              src={"/assets/images/p-4/1.png"}
              alt={"Trafalgar"}
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div className="absolute md:w-[850px] right-0 top-0 bottom-0 z-10">
            <Image
              className="hover:scale-105 transition duration-200 cursor-move"
              src={"/assets/images/p-4/2.png"}
              alt={"Trafalgar"}
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div
            className="absolute md:w-[1000px] h-[400px] right-40 bottom-0 z-10"
            // style={{ transform: "rotate(-9deg" }}
          >
            <Image
              className="hover:scale-105 transition duration-200 cursor-move"
              src={"/assets/images/p-4/3.png"}
              alt={"Trafalgar"}
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
        <div className="px-40 absolute bottom-40 tracking-widest">
          <div className="space-y-4">
            <p className="font-extralight text-xl">Finance</p>
            <h2 className="font-light text-6xl">Landing </h2>
            <h2 className="font-light text-6xl">Page UI KIT</h2>
            <div className="font-normal flex items-center space-x-2 text-2xl pt-8">
              <p>Created with ❤️ at</p>
              <p>
                <div className="relative w-20 h-4">
                  <Image
                    className="scursor-move"
                    src={"/assets/images/p-4/logo.svg"}
                    alt={"Logo "}
                    objectPosition="center"
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
              </p>
            </div>
            <p className="font-semibold text-xl pt-4">By Nabin, Funder.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default home;
