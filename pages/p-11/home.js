import Nav from "../../components/p-11/Nav";
import Image from "next/image";
import MenuBox from "../../components/p-11/MenuBox";
import CardWapper from "../../components/p-11/CardWapper";
import { MdPool } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiWaterPolo, GiBeachBall } from "react-icons/gi";
import { HiOutlinePlay } from "react-icons/hi";

import Footer from "../../components/p-11/Footer";

const home = () => {
  return (
    <div>
      <div className="px-20">
        <Nav />
        <main>
          <div className=" relative h-[500px] w-full my-8 rounded-lg">
            <Image
              className="rounded-lg"
              src="/assets/images/p-11/bg.png"
              alt=""
              layout="fill"
              objectPosition="center"
              objectFit="fill"
            />
            <div
              className=" absolute inset-0 rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, rgba(189, 222, 195,0.8) 21.27%, rgba(227, 227, 227, 0.1) 86.66%)",
              }}
            />
            <div className="absolute top-1/3 left-20 w-full space-y-3">
              <h2 className="font-bold text-4xl w-1/3">
                Enjoy Your Dream Vacation
              </h2>
              <p className="w-1/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <MenuBox />
          <div className="h-40" />
          <CardWapper />
          <div className="my-20 flex justify-between items-start px-16">
            <div className="space-y-4 mt-8 pl-12">
              <h2 className="font-bold text-4xl">Resort Surprises</h2>
              <p className="font-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="space-y-6 text-xl font-normal">
                <ol className="flex items-center space-x-3">
                  <MdPool
                    className="text-[#092AFC] bg-[#D8E8FD] p-3 w-12 h-12 rounded-full"
                    size={30}
                  />
                  <p>Infinity Pool</p>
                </ol>
                <ol className="flex items-center space-x-3">
                  <FaUmbrellaBeach
                    className="text-[#092AFC] bg-[#D8E8FD] p-3 w-12 h-12 rounded-full"
                    size={30}
                  />
                  <p>The Beach</p>
                </ol>
                <ol className="flex items-center space-x-3">
                  <GiWaterPolo
                    className="text-[#092AFC] bg-[#D8E8FD] p-3 w-12 h-12 rounded-full"
                    size={30}
                  />
                  <p>Beach Surprise</p>
                </ol>
                <ol className="flex items-center space-x-3">
                  <GiBeachBall
                    className="text-[#092AFC] bg-[#D8E8FD] p-3 w-12 h-12 rounded-full"
                    size={30}
                  />
                  <p>Beach Activitiese</p>
                </ol>
              </div>
            </div>
            <div className="relative h-[700px] w-1/2 rounded-md">
              <Image
                className="rounded-md"
                src="/assets/images/p-11/r-4.png"
                alt="logo"
                layout="fill"
                objectPosition="center"
                objectFit="fill"
              />
              <div className="absolute top-28 left-60 text-white">
                <HiOutlinePlay size={250} />
              </div>
              <div className="absolute flex items-center space-x-4 bottom-36 left-[40%]">
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    className="rounded-md"
                    src="/assets/images/p-11/c-4.png"
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    className="rounded-md"
                    src="/assets/images/p-11/c-5.png"
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    className="rounded-md"
                    src="/assets/images/p-11/c-6.png"
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-20">
            <div className="flex space-x-20 items-center">
              {/* right */}
              <div className="flex items-center space-x-8">
                <div className="relative h-[300px] w-[200px] rounded-md">
                  <Image
                    className="rounded-md"
                    src="/assets/images/p-11/r-5.png"
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <div className="relative h-[300px] w-[200px] rounded-md">
                  <Image
                    className="rounded-md"
                    src="/assets/images/p-11/r-6.png"
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <div className="relative h-[300px] w-[200px] rounded-md">
                  <Image
                    className="rounded-md"
                    src="/assets/images/p-11/r-7.png"
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
              </div>
              {/* left */}
              <div className="space-y-4">
                <p className="text-lg">Weclome to Sajid Studio resort</p>
                <h3 className="font-bold text-2xl">Relaxing Pleasure</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur semper vitae integer eget velit lobortis. Maecenas
                  ultrices nunc lobortis ac vivamus neque, eget. Placerat auctor
                  enim nisl amet, in sem at. Elementum nec consequat vulputate
                  nibh nisl ultrices diam sapien, nibh. Odio faucibus semper
                  nibh vulputate condimentum.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="bg-[#E5F4F7] p-20 mt-8">
        <div className="px-20 bg-white rounded-2xl">
          <h2 className="font-bold text-2xl py-8 w-1/3">
            Search for other Top Airlines
          </h2>
          <div className="flex items-center justify-between relative overflow-visible">
            <div className="space-y-6 py-4">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    className="rounded-full"
                    src="/assets/images/p-11/l-1.png"
                    alt=""
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <p>Biman BD Airline</p>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    className="rounded-full"
                    src="/assets/images/p-11/l-2.png"
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <p>Badal Airline</p>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    className="rounded-full"
                    src="/assets/images/p-11/l-3.png"
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <p>Raza Airline</p>
              </div>
            </div>
            {/* 2 */}
            <div className="space-y-6 py-4">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    className="rounded-full"
                    src="/assets/images/p-11/l-4.png"
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <p>Hello Int. Airlines</p>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    className="rounded-full"
                    src="/assets/images/p-11/l-5.png"
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <p>Pakistan International Airlines</p>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    className="rounded-full"
                    src="/assets/images/p-11/l-6.png"
                    alt="reality"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <p>Hello International Airlines</p>
              </div>
            </div>
            <div className="w-[200px]" />
            <div className="absolute h-[450px] w-[220px] bottom-0 right-0 cursor-not-allowed">
              <Image
                src="/assets/images/p-11/p-1.png"
                alt="travel"
                layout="fill"
                objectPosition="center"
                objectFit="fill"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default home;
