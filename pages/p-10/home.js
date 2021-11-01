import Image from "next/image";
import ItemCart from "../../components/p-10/ItemCart";
import Nav from "../../components/p-10/Nav";
import { FiArrowDown } from "react-icons/fi";

const items = [
  {
    img: "/assets/images/p-10/boy.png",
    title: "Collector outfit",
    link: "",
  },
  {
    img: "/assets/images/p-10/doll.png",
    title: "Doll",
    link: "",
  },
];

const home = () => {
  return (
    <div>
      <div className="relative max-w-screen h-screen md:overflow-hidden overflow-x-hidden">
        <Image
          src="/assets/images/p-10/bg.png"
          alt="squid-bg"
          objectFit="cover"
          layout="fill"
          objectPosition="center"
        />
        <div className="absolute z-10 w-[340px] h-[340px] left-0 top-[-205px]">
          <Image
            src="/assets/images/p-10/bg-cricle.png"
            alt="squid-bg"
            objectFit="cover"
            layout="fill"
            objectPosition="center"
          />
        </div>
        <div className="absolute z-10 w-[1000px] h-[1000px] -right-40 bottom-[-400px]">
          <Image
            src="/assets/images/p-10/bg-cricle.png"
            alt="squid-bg"
            objectFit="cover"
            layout="fill"
            objectPosition="center"
          />
        </div>
        <div className="absolute z-30 w-20 h-20 right-8 bottom-6 rounded-full">
          <Image
            src="/assets/images/p-10/btn-cricle.png"
            alt="squid-bg"
            objectFit="cover"
            layout="fill"
            objectPosition="center"
          />
          <p className="relative top-1/3 left-1/3 text-white">
            <FiArrowDown size={25} />
          </p>
        </div>
        <div className="absolute z-20 md:px-20 px-4 w-full">
          <Nav />
          <div className="md:flex md:space-x-4 items-start justify-between md:mt-20 mt-8">
            <div className="md:w-1/2 text-white">
              <div className="relative md:w-[380px] md:h-[200px] w-[200px] h-[100px] my-8">
                <Image
                  src="/assets/images/p-10/text.png"
                  alt="squid-bg"
                  objectFit="cover"
                  layout="fill"
                  objectPosition="center"
                />
              </div>
              <p className="font-medium text-lg md:w-1/2 tracking-wider text-gray-300">
                Shop your favourite toys and outfits of the Squid Game on the
                go!
              </p>
              <button className="bg-[#E84381] px-16 py-3 rounded-full text-xl my-8">
                Shop Now
              </button>
              <div className="flex space-x-8 mt-20">
                <ItemCart item={items[0]} />
                <ItemCart item={items[1]} />
              </div>
            </div>
            <div className="relative md:w-[600px] md:h-[600px] w-screen h-[400px] -left-4 md:left-0 md:top-20 top-40">
              <Image
                src="/assets/images/p-10/img.png"
                alt="squid-bg"
                objectFit="cover"
                layout="fill"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
