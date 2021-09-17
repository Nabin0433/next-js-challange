import Head from "next/head";
import Image from "next/image";
const home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="">
        <div className="bg-black md:hidden z-0 inset-0 absolute opacity-30"></div>
        <div className="w-screen overflow-hidden">
          <div className="absolute md:w-full md:h-full w-full h-full right-12 z-0">
            <Image
              className="hover:scale-105 transition duration-200 cursor-move"
              src={"/assets/images/p-4/shadow.png"}
              alt={"Trafalgar"}
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div className="absolute flex md:w-[1400px] md:h-full  w-full h-full right-12 z-10">
            <Image
              className="hover:scale-105 transition duration-200 cursor-move"
              src={"/assets/images/p-4/1.png"}
              alt={"Trafalgar"}
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div className="absolute md:w-[850px]  w-full h-full md:auto right-0 top-0 bottom-0 z-10">
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
            className="absolute md:w-[1000px] md:h-[400px] w-full h-1/2 right-40 bottom-0 z-10"
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
        <div className="md:px-40 px-8 absolute bottom-40 tracking-widest z-30 text-white md:text-black">
          <div className="space-y-4">
            <p className="font-extralight text-xl">Finance</p>
            <h2 className="font-light text-6xl">Landing </h2>
            <h2 className="font-light text-6xl">Page UI KIT</h2>
            <div className="font-normal flex items-center space-x-2 text-2xl pt-8">
              <p>Created with ❤️ at</p>
              <p>
                <div className="relative w-20 h-8 md:h-4">
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
