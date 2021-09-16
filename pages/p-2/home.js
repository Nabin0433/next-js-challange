import Header from "../../components/p-2/Header";
import Head from "next/head";
import Image from "next/image";
import ItemCard from "../../components/p-2/ItemCard";
import ItemModel from "../../components/p-2/model/Item.model";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import ArticalCard from "../../components/p-2/ArticalCard";
import ArticalModel from "../../components/p-2/model/Artical.model";
import Footer from "../../components/p-2/Footer";

const home = () => {
  let page = 1;
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Head>
        <title>Home</title>
      </Head>
      <Header active="home" />
      <main className="capitalize relative">
        {/* dot degine */}
        <div className="absolute">
          <div className="relative md:w-[120px] md:h-[150px] h-[50px] w-[50px]">
            <Image
              src={"/assets/images/p-2/dot.svg"}
              alt={"dot"}
              objectPosition="center"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/* end */}
        <div className="md:px-60 px-8">
          <div className="flex md:flex-row flex-col-reverse justify-center items-center md:mt-40 mt-12 md:space-x-24">
            <div className="md:space-y-8 space-y-6">
              <h2 className="font-bold lg:text-7xl text-4xl">
                Virtual healthcare for you
              </h2>
              <p className="md:text-base font-light font-mono">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <button className="bg-primary_p_2 py-4 px-12 text-white rounded-3xl hover:bg-hover_primary_p_2">
                Consult today
              </button>
            </div>
            <div>
              <div className="relative md:w-[500px] md:h-[430px] w-96 h-[300px] mb-8 md:mb-0 flex-grow">
                <Image
                  className="hover:scale-105 rounded-md transform transition duration-200 cursor-move"
                  src={"/assets/images/p-2/1.svg"}
                  alt={"Trafalgar"}
                  objectPosition="center"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:mt-40 mt-20">
            <div className="space-y-8 md:w-3/4 text-center">
              <h2 className="font-bold lg:text-4xl text-xl">Our services</h2>
              <hr className="w-20 border-b-2 border-gray-800 mx-auto" />
              <p className="text-sm md:text-base font-sans font-extralight">
                We provide to you the best choiches for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
              </p>
            </div>
          </div>
          <div className="md:mt-20 mt-12 grid md:grid-cols-3 md:gap-20 grid-cols-1 gap-8">
            {ItemModel.map((item, index) => (
              <ItemCard key={index} item={item} />
            ))}
            {/* dot degine */}
            <div className="absolute hidden md:block left-0 z-0">
              <div className="relative md:w-[900px] md:h-[800px] h-[300px] w-[300px]">
                <Image
                  src={"/assets/images/p-2/cross.svg"}
                  alt={"dot"}
                  objectPosition="center"
                  layout="fill"
                  objectFit="fill"
                />
              </div>
            </div>
            {/* end */}
          </div>
          <div className="flex justify-center">
            <button className="py-4 px-12 border-2 mt-16 rounded-3xl border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white active:scale-95 transform transition duration-200">
              Learn more
            </button>
          </div>
          <div className="flex md:flex-row flex-col-reverse justify-center items-center md:mt-32 mt-12 md:space-x-24">
            <div className="mt-8 md:mt-0">
              <div className="relative md:w-[500px] md:h-[450px] w-96 h-[300px] mb-8 md:mb-0 flex-grow">
                <Image
                  className="hover:scale-105 rounded-md transform transition duration-200 cursor-move"
                  src={"/assets/images/p-2/2.svg"}
                  alt={"Trafalgar"}
                  objectPosition="center"
                  layout="fill"
                  objectFit="fit"
                />
              </div>
            </div>
            <div className="md:space-y-8 space-y-6">
              <h2 className="font-bold lg:text-7xl text-4xl">
                Virtual healthcare for you
              </h2>
              <p className="md:text-base font-light font-mono">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <button className="py-4 px-12 border-2 mt-16 rounded-3xl border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white active:scale-95 transform transition duration-200">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center md:mt-32 mt-12 md:space-x-24">
            <div className="md:space-y-8 space-y-6">
              <h2 className="font-bold lg:text-7xl text-4xl">
                Virtual healthcare for you
              </h2>
              <p className="md:text-base font-light font-mono">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <button className="py-4 px-12 border-2 mt-16 rounded-3xl border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white active:scale-95 transform transition duration-200">
                Download
              </button>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="relative md:w-[500px] md:h-[450px] w-96 h-[300px] mb-8 md:mb-0 flex-grow">
                <Image
                  className="hover:scale-105 rounded-md transform transition duration-200 cursor-move"
                  src={"/assets/images/p-2/3.svg"}
                  alt={"Trafalgar"}
                  objectPosition="center"
                  layout="fill"
                  objectFit="fit"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)",
              borderRadius: "24px",
            }}
            className="md:mt-20 mt-16 text-white shadow-md hover:shadow-2xl flex flex-col justify-center items-center md:px-40 p-8 md:pb-32 md:pt-20 md:space-y-16 space-y-12"
          >
            <h2 className=" font-bold text-2xl">
              What our customer are saying
            </h2>
            <div className="flex flex-col md:flex-row justify-between md:items-center space-y-12 md:space-y-0">
              <div className="flex justify-between space-x-8 items-center">
                <div className="relative rounded-full w-28 h-28">
                  <Image
                    className="rounded-full transform transition duration-200 cursor-move"
                    src={"/assets/images/me.jpeg"}
                    alt={"Trafalgar"}
                    objectPosition="center"
                    layout="fill"
                    objectFit="fit"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Nabin Karki</h4>
                  <p className="font-light">Founder</p>
                </div>
              </div>
              <div className="md:w-5/12">
                <p>
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-16">
            <div className="flex items-center justify-between space-x-8">
              <div
                className={`${
                  page <= 1 ? "text-gray-600" : "text-blue-600"
                } hover:hover:text-blue-800`}
              >
                <HiOutlineArrowNarrowLeft size={50} />
              </div>
              <div className="flex items-center space-x-4">
                <span className="w-3 h-3 rounded-full bg-primary_p_2 hover:bg-hover_primary_p_2" />
                <span className="w-3 h-3 rounded-full bg-gray-400 hover:bg-hover_primary_p_2" />
                <span className="w-3 h-3 rounded-full bg-gray-400 hover:bg-hover_primary_p_2" />
                <span className="w-3 h-3 rounded-full bg-gray-400 hover:bg-hover_primary_p_2" />
              </div>
              <div
                className={`${
                  page >= 2 ? "text-gray-600" : "text-blue-600"
                } hover:text-blue-800`}
              >
                <HiOutlineArrowNarrowRight size={50} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-8 md:mt-32 mt-16">
            <h2 className="font-bold text-2xl">Check out our latest article</h2>
            <hr className="w-8 border-b border-black" />
            {/* cards */}
            <div className="md:flex md:space-x-8 md:pb-8 space-y-8 md:space-y-0 p-2">
              {ArticalModel.map((item, index) => (
                <ArticalCard key={index} item={item} />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="py-4 px-12 border-2 rounded-3xl border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white active:scale-95 transform transition duration-200">
              View all
            </button>
          </div>
          {/* space */}
          <div className="md:mt-20 mt-8 flex"></div>
          {/* footer */}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default home;
