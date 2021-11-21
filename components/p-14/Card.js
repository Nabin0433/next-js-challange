import { MdDone, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div
      style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
      className="px-8 py-4 rounded-xl hover:shadow-2xl cursor-pointer"
    >
      <div className=" relative w-[320px] h-[200px]">
        <Image
          className="rounded-sm"
          src={`/assets/images/p-14/c-${item}.png`}
          alt="nabin"
          layout="fill"
          objectPosition="center"
          objectFit="contain"
        />
      </div>
      <h2 className="font-bold text-2xl my-4">Toyota Corolla T-20</h2>
      <div className="flex space-x-3 items-center mb-4">
        <div className="bg-[#00C04D] rounded-full p-2 text-white">
          <MdDone size={20} />
        </div>
        <p>Air Conditioned</p>
      </div>
      <div className="flex space-x-3 items-center mb-4">
        <div className="bg-[#00C04D] rounded-full p-2 text-white">
          <MdDone size={20} />
        </div>
        <p>Bluetooth Sound System</p>
      </div>
      <div className="flex space-x-3 items-center mb-4">
        <div className="bg-[#00C04D] rounded-full p-2 text-white">
          <MdDone size={20} />
        </div>
        <p>Sunroof Available</p>
      </div>
      <button className="bg-[#1F4590] hover:bg-[#072c75] text-white active:scale-95 px-4 py-2 rounded-md mt-6 mb-4">
        Rent Now
      </button>
    </div>
  );
};

export default Card;
