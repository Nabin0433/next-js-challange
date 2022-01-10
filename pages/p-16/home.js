import Image from "next/image";
import { GiTensionSnowflake } from "react-icons/gi";
import { CgArrowLongRight } from "react-icons/cg";
import { HiChevronRight } from "react-icons/hi";
import CountUp from "react-countup";

const home = () => {
  return (
    <div>
      <div className="lg:flex w-screen lg:h-screen overflow-hidden">
        {/* left */}
        <div className="bg-white px-4 lg:pl-20 lg:pr-16 w-full lg:w-[55%]">
          <div className="lg:flex space-y-4 lg:space-y-0 items-center justify-between mt-8 text-sm">
            <div className="h-8 w-28 relative cursor-pointer">
              <Image
                className="z-0"
                src="/assets/images/p-16/logo.png"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="flex justify-center gap-x-10 transition duration-200 ease-out">
              <ul className="cursor-pointer hover:text-gray-400">Deposit</ul>
              <ul className="cursor-pointer hover:text-gray-400">Dashboard</ul>
              <ul className="cursor-pointer hover:text-gray-400">Company</ul>
              <ul className="cursor-pointer hover:text-gray-400">Pricing</ul>
            </div>
          </div>
          {/* text */}
          <div className="lg:mt-40 mt-20">
            <div className="flex item-center gap-3">
              <GiTensionSnowflake size={20} />
              <GiTensionSnowflake size={20} />
              <GiTensionSnowflake size={20} />
            </div>
            <h2 className="lg:text-5xl text-xl tracking-wider my-5">
              All the experience in the new credit card
            </h2>
            <CgArrowLongRight size={50} />
          </div>
          <p className="mt-8 text-xs">
            Simple transfers, payments for utilities, functional statemement,
            card settings, for which you used to have to go too the brach
            oonline-banking
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <button className="text-xs bg-black hover:bg-gray-800 rounded-full py-2 px-4 text-white">
              Order a card
            </button>
            <button className="flex items-center text-xs space-x-1 hover:text-gray-400">
              <span> How it works</span>
              <HiChevronRight size={20} />
            </button>
          </div>
          {/* count */}
          <div className="lg:mt-28 mt-8 mb-12 lg:mb-0 flex gap-6">
            <div className="border-r w-1/3">
              <p className=" tracking-wider font-light">Active users</p>
              <p className="font-semibold text-xl">
                <CountUp end={5000} duration={10} />+
              </p>
            </div>
            <div className="border-r w-1/3">
              <p className=" tracking-wider font-light">Download</p>
              <p className="font-semibold text-xl">
                <CountUp end={33000} duration={10} />+
              </p>
            </div>
            <div className="w-1/3">
              <p className=" tracking-wider font-light">Reviews</p>
              <p className="font-semibold text-xl">
                <CountUp end={1200} duration={10} />+
              </p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="bg-white w-full lg:w-[45%]">
          <div className="h-[100vh] w-[100%] relative">
            <div className="absolute z-20 pr-20 right-0 top-0 mt-8 flex items-center space-x-4">
              <button className="text-xs bg-black hover:bg-gray-800 rounded-full py-2 px-4 text-white">
                Open your account
              </button>
              <button className="flex items-center text-xs space-x-1 hover:bg-gray-100 bg-white rounded-full py-2 px-4">
                <span> Sign in</span>
                <HiChevronRight size={20} />
              </button>
            </div>
            <Image
              className="z-0"
              src="/assets/images/p-16/bg.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <Image
              className="z-10 opacity-40"
              src="/assets/images/p-16/bg-up.png"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            />
            <Image
              className="z-0 opacity-90"
              src="/assets/images/p-16/hand.png"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
            <div className="top-[20%] left-[20%] absolute rotate-12 z-10">
              <div className="relative w-16 h-16">
                <Image
                  className="z-20"
                  src="/assets/images/p-16/star.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className="relative w-8 h-8">
                <Image
                  className="z-20"
                  src="/assets/images/p-16/star.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </div>
            <div className="flex items-center justify-center inset-0 absolute">
              <div className="relative w-96 h-96">
                <Image
                  className="z-20"
                  src="/assets/images/p-16/Credit_card.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default home;
