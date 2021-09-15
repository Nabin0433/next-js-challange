import Head from "next/head";
import Footer from "../components/p-1/Footer";
import Header from "../components/p-1/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="">
        <div className=" flex-col-reverse flex md:flex-row  items-center justify-between mt-10 md:mt-40 px-8 md:px-44">
          <div className="bg-white flex-1 mt-20 md:mt-0">
            <h4 className="text-3xl font-bold">Hi, I am John,</h4>
            <h4 className="text-3xl font-bold">Creative Technologist</h4>
            <p className="mt-8 text-base font-normal">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button
              className="bg-red-400 px-6 py-4 mt-8 rounded-xl text-white hover:bg-red-500 transition duration-150 active:scale-95 active:transform hover:shadow-lg"
              onClick={() => null}
            >
              Download Resume
            </button>
          </div>
          <div className="flex-1">
            <div className="relative h-60 rounded-full w-60 float-right shadow-md hover:shadow-2xl hover:animate-spin">
              <Image
                className="rounded-full"
                src="https://picsum.photos/800/800"
                alt="Nabin"
                objectPosition="center"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#EDF7FA" }}
          className="md:px-44 py-20 mt-20 md:mt-40 px-8"
        >
          <div className="flex justify-between items-center capitalize font-normal">
            <h2 className="text-lg">Recent posts</h2>
            <p className=" text-blue-400 cursor-pointer text-base">View all</p>
          </div>
          <div className="md:flex justify-between md:space-x-60 space-y-16 md:space-y-0 items-center mt-8">
            <div className="bg-white rounded-sm px-12 pt-10 pb-6 shadow-lg hover:shadow-2xl">
              <h2 className=" font-bold text-3xl">
                Making a design system from scratch
              </h2>
              <div className="flex items-center space-x-3 my-6 font-normal text-lg">
                <p>12 Feb 2020</p>
                <p className="border-r-2 border-black h-4 " />
                <p>Design, Pattern</p>
              </div>
              <p className="font-normal text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="bg-white rounded-sm px-12 pt-10 pb-6 shadow-lg hover:shadow-2xl">
              <h2 className=" font-bold text-3xl">
                Making a design system from scratch
              </h2>
              <div className="flex items-center space-x-3 my-6 font-normal text-lg">
                <p>12 Feb 2020</p>
                <p className="border-r-2 border-black h-4 " />
                <p>Design, Pattern</p>
              </div>
              <p className="font-normal text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white md:px-44 px-8">
          <h2 className=" text-xl font-normal my-10">Featured works</h2>
          <div className="space-y-20 md:space-y-8 border-b-2 border-gray-400 pb-16">
            {Array(4)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="md:flex justify-start md:space-x-6 items-start"
                >
                  <div className="relative h-60 md:w-96 mb-8 md:mb-0">
                    <Image
                      className="hover:scale-110 rounded-md transform transition duration-200 cursor-move"
                      src="https://picsum.photos/500/800"
                      alt="Nabin"
                      objectPosition="center"
                      layout="fill"
                      objectFit="fill"
                    />
                  </div>
                  <div className="space-y-8">
                    <h2 className="font-bold text-3xl cursor-help">
                      Designing Dashboards
                    </h2>
                    <div className="flex justify-start items-center space-x-4">
                      <p className="bg-black py-1 px-2 text-white font-black text-lg rounded-3xl">
                        2020
                      </p>
                      <p className="text-gray-500 ">Dashboard</p>
                    </div>
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
