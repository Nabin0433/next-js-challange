import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const ArticalCard = ({ item }) => {
  return (
    <div className="rounded-3xl shadow hover:shadow-xl bg-white space-y-6 flex-1">
      <div className="relative h-60 md:h-80">
        <Image
          className="transform transition duration-200 cursor-move rounded-t-3xl"
          src={item.img}
          alt={"Trafalgar"}
          objectPosition="center"
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className="px-8 py-8 space-y-6">
        <h2 className="font-bold text-xl">{item.heading}</h2>
        <p className="font-light text-sm md:text-base">{item.info}</p>
        <div className="flex text-blue-600 hover:text-blue-800 cursor-pointer space-x-3">
          <p>Read more</p>
          <HiOutlineArrowNarrowRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default ArticalCard;
