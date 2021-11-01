import Image from "next/image";
import { VscArrowSmallRight } from "react-icons/vsc";

const ItemCart = ({ item }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(132.97deg, rgba(171, 213, 250, 0.35) 2.84%, rgba(65, 48, 90, 0.03) 99.04%)",
        backdropFilter: "blur(4px)",
        borderRadius: "20px",
        border: "1px solid",

        border: "1.5px solid",
        borderImageSource:
          "linear-gradient(133.66deg, #E94F86 3.64%, rgba(155, 111, 238, 0) 35.96%, rgba(123, 127, 234, 0) 66.54%, #E95088 97.84%)",
      }}
      className="flex md:px-4 px-1 md:w-[300px] md:h-[160px] w-[150px] h-[120px] space-x-3 md:space-x-1 items-center cursor-pointer"
    >
      <div className="relative w-1/2  h-[190px]  md:bottom-3 bottom-0">
        <Image
          src={item.img}
          alt="squid-bg"
          objectFit="contain"
          layout="fill"
          objectPosition="center"
        />
      </div>
      <div>
        <h2 className="md:text-lg text-base font-semibold w-3/4">
          {item.title}
        </h2>
        <div className="font-normal space-x-2 md:text-sm text-xs flex items-center">
          <p>View details</p>
          <p>
            <VscArrowSmallRight size={25} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
