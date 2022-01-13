import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "react-typewriter";
import Footer from "../../components/p-18/Footer";
import Header from "../../components/p-18/Header";
import data from "../../components/p-18/data";

const home = () => {
  return (
    <div
      className="customContainer py-4"
      style={{
        background: "#fff",
        // background:
        //   "radial-gradient(circle, rgba(56,57,64,0.02) 0%, rgba(73,8,3,0.02) 100%)",
        // backgroundColor: "#FFDEE9",
        // backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
      }}
    >
      <Head>
        <title>Desing-18</title>
      </Head>
      <Header data={data} />
      <div className="mt-16 lg:mt-32 md:flex justify-between items-start">
        <div className="w-full lg:w-[340px]">
          <TypeWriter typing={1}>
            <h2 className="text-2xl lg:text-6xl">Hello, I’m {data.name}.</h2>
            <p className="font-light text-gray-400 text-sm mt-8 lg:mt-12">
              Hello, I’m {data.info}.
            </p>
          </TypeWriter>
          {/* icon */}
          {/* <div>
          <p>icon</p>
        </div> */}
        </div>
        <div className="relative w-full lg:w-[50%] h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
          <Image
            className="hover:scale-105 transform transition duration-500 ease-out opacity-95 rounded-xl"
            src={data.gif[0]}
            alt="nabin"
            layout="fill"
            objectPosition="center"
            objectFit="contain"
          />
        </div>
      </div>
      {/* cards */}
      <div className="mt-8 lg:mt-16">
        {data.project.map((i) => i.id && <CardProject key={i.id} item={i} />)}
      </div>
      <Footer data={data} />
    </div>
  );
};

export default home;

const CardProject = ({ item }) => (
  <div className="border-b-2 border-gray-400 flex flex-col-reverse lg:flex-row items-start justify-between py-8 mb-8 lg:mb-16">
    {/* left */}
    <div className="w-2/3 lg:w-1/3 tracking-wide mt-8 lg:mt-0">
      <h2 className="border-b border-gray-300 pb-4">
        {item.id} / {item.name}
      </h2>
      <p className="mt-8 textr-sm text-gray-800">{item.des}</p>
      <p className="mt-4 text-xs font-light text-gray-600">{item.info}</p>
      <div className="text-sm mt-8 lg:mt-52 hover:text-gray-400">
        <Link
          href={item.link}
          className="mt-4 text-xs font-light text-gray-600"
        >
          {item.linktitle}
        </Link>
      </div>
    </div>
    {/* right */}
    <div className="relative w-full lg:w-[50%] h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
      <Image
        className="hover:scale-105 transform transition duration-500 ease-out opacity-95 rounded-xl"
        src={item.img}
        alt={item.alt}
        layout="fill"
        objectPosition="center"
        objectFit="cover"
      />
    </div>
  </div>
);
