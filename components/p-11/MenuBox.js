import { BiSwim, BiTimeFive } from "react-icons/bi";
import { GiThermometerCold } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { IconFilledButton } from "./Buttons";
import Image from "next/image";

const MenuBox = () => {
  return (
    <div className="absolute -mt-20 w-[90%] px-20">
      <div className="px-8 py-4 flex justify-between items-start space-x-20 bg-white shadow-xl rounded-3xl">
        {/* left */}
        <div className="w-1/2 space-y-6">
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
        <div className="w-1/2 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="font-semibold text-2xl">Hotels for You</h2>
            <div className="text-gray-400 relative">
              <input
                className="rounded-full shadow pl-4 h-10 outline-none w-60"
                type="text"
                placeholder="Search....."
              />
              <span className="absolute right-1 top-1 hover:shadow rounded-full p-1">
                <RiSearchLine size={24} />
              </span>
            </div>
          </div>
          <p className="font-normal text-sm text-gray-600">5 days 6 nights</p>
          <div className="flex justify-between items-center">
            <IconFilledButton
              text="Search"
              icon={<BiTimeFive size={25} />}
              bg="#0500FF"
            />
            <div className="flex item-center space-x-6">
              <div className="relative h-[60px] w-[60px] rounded-full">
                <Image
                  className="rounded-full"
                  src="/assets/images/p-11/c-1.png"
                  alt=""
                  layout="fill"
                  objectPosition="center"
                  objectFit="fill"
                />
              </div>
              <div className="relative h-[60px] w-[60px] rounded-full">
                <Image
                  className="rounded-full"
                  src="/assets/images/p-11/c-2.png"
                  alt=""
                  layout="fill"
                  objectPosition="center"
                  objectFit="fill"
                />
              </div>
              <div className="relative h-[60px] w-[60px] rounded-full">
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
