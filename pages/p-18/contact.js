import Head from "next/head";
import Footer from "../../components/p-18/Footer";
import Header from "../../components/p-18/Header";
import data from "../../components/p-18/data";
import Link from "next/link";
import Image from "next/image";
const contact = () => {
  return (
    <div className="customContainer py-4">
      <Head>
        <title>Desing-18</title>
      </Head>
      <Header data={data} />

      <main>
        <div className="flex flex-col-reverse md:flex-row justify-between items-start text-sm tracking-wide mt-8 lg:mt-28">
          <div className="md:w-1/3">
            <h2 className="text-3xl lg:text-4xl">
              Hi I’m {data.name}, Developer & Freelancer.
            </h2>
            <p className="text-sm mt-8">
              My work is mainly focused on third-dimension modeling, texturing
              and rendering. I like exploring the creatures with a touch of dark
              surrealism for characters and production.
            </p>
            <p className="text-sm mt-8">
              Now I’m an interactive media design student in Istanbul ⏤
              currently freelancing and seeking internship opportunities.
            </p>
          </div>
          {/* right */}
          <div className="relative w-full lg:w-[70%] h-[400px] rounded-xl overflow-hidden">
            <Image
              className="hover:scale-105 transform transition duration-500 ease-out opacity-95 rounded-xl"
              src={data.gif[1]}
              alt="nabin"
              layout="fill"
              objectPosition="center"
              objectFit="cover"
            />
          </div>
        </div>

        {/* skill */}
        <div className="flex items-start lg:w-[500px] mt-8 lg:mt-16">
          <div className="space-y-20 mr-8">
            <p>FreamWork/Lib/Tools </p>
            <p>Skills</p>
          </div>
          <div className="space-y-11 text-sm">
            <p>
              ( React, Next, Node )-js, Flutter, Dart , No SQL , AWS (EC2,
              Aplify , R5 , S3) , Vercel , Firebase , MongoDB, GraphQL, MUI
              ,etc...
            </p>
            <div>
              <p>Front-end</p>
              <p>Back-end</p>
              <p>Mobile-Development</p>
            </div>
          </div>
        </div>
        {/* line */}
        <div className="border-b-2 border-gray-400 mt-8 lg:mt-20" />
        {/* contact */}
        <div className="flex justify-around items-center my-8">
          <div className="lg:w-1/6 w-[200px]">
            <p>I am thrilled to answer to your next project {">"}</p>
          </div>
          <div>
            <Link href="mailto:nabin0433@gmail.com">Nabin0433@gmail.com</Link>
            <p className="text-[10px] cursor-pointer mt-4">View Resume</p>
          </div>
        </div>
      </main>
      <Footer data={data} />
    </div>
  );
};

export default contact;
