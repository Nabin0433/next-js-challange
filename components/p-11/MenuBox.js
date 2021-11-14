import { BiSwim, BiTimeFive } from "react-icons/bi";
import { GiThermometerCold } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { IconFilledButton } from "./Buttons";
import Image from "next/image";

const MenuBox = () => {
  return (
    <div className="absolute md:-mt-20 md:w-[90%] w-full -ml-8 md:ml-0 md:px-20 px-0">
      <div className="md:px-8 px-2 py-4 md:flex justify-between items-start md:space-x-20 bg-white shadow-xl rounded-3xl space-y-8">
        {/* left */}
        <div className="md:w-1/2 md:space-y-6 space-y-10 px-2 md:px-0">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-2xl">Facilities</h2>
            <p className="font-medium text-md text-yellow-400 cursor-pointer">
              See More
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="space-y-3 group cursor-pointer ">
              <div className="bg-white shadow-md rounded-xl flex justify-center items-center p-2 text-[#669CEC] group-hover:shadow-xl">
                <BiSwim size={40} />
              </div>
              <p>Swiming</p>
            </div>
            <div className="space-y-3 group cursor-pointer">
              <div className="bg-white shadow-md rounded-xl flex justify-center items-center p-2 text-[#FABE25] group-hover:shadow-xl">
                <GiThermometerCold size={40} />
              </div>
              <p>Wi-fi</p>
            </div>
            <div className="space-y-3 group cursor-pointer">
              <div className="bg-white shadow-md rounded-xl flex justify-center items-center p-2 text-[#2722FA] group-hover:shadow-xl">
                <FaWifi size={40} />
              </div>
              <p>AC</p>
            </div>
            <div className="space-y-3 group cursor-pointer">
              <div className="bg-white shadow-md rounded-xl flex justify-center items-center p-2 text-[#FF9900] group-hover:shadow-xl">
                <IoFastFoodOutline size={40} />
              </div>
              <p>Dinner</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="md:w-1/2 md:space-y-4 space-y-6 px-2 md:px-0">
          <div className="md:flex justify-between items-start">
            <h2 className="font-semibold text-2xl pb-4 md:pb-0">
              Hotels for You
            </h2>
            <div className="text-gray-400 relative">
              <input
                className="rounded-full shadow pl-4 h-10 outline-none md:w-60 w-full"
                type="text"
                placeholder="Search....."
              />
              <span className="absolute md:right-1 right-2 top-1 hover:shadow rounded-full p-1">
                <RiSearchLine size={24} />
              </span>
            </div>
          </div>
          <p className="font-normal text-sm text-gray-600">5 days 6 nights</p>
          <div className="flex justify-between items-center px-8 md:px-0">
            <IconFilledButton
              text="Search"
              icon={<BiTimeFive size={25} />}
              bg="#0500FF"
            />
            <div className="flex item-center space-x-6">
              <div className="relative md:h-[60px] md:w-[60px] h-[40px] w-[40px] rounded-full">
                <Image
                  className="rounded-full"
                  src="/assets/images/p-11/c-1.png"
                  alt=""
                  layout="fill"
                  objectPosition="center"
                  objectFit="fill"
                />
              </div>
              <div className="relative md:h-[60px] md:w-[60px] h-[40px] w-[40px] rounded-full">
                <Image
                  className="rounded-full"
                  src="/assets/images/p-11/c-2.png"
                  alt=""
                  layout="fill"
                  objectPosition="center"
                  objectFit="fill"
                />
              </div>
              <div className="relative md:h-[60px] md:w-[60px] h-[40px] w-[40px] rounded-full">
                <Image
                  className="rounded-full"
                  src="/assets/images/p-11/c-3.png"
                  alt=""
                  layout="fill"
                  objectPosition="center"
                  objectFit="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBox;
