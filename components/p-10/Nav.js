import Image from "next/image";
import { RiSearchLine } from "react-icons/ri";

const Nav = () => {
  return (
    <div className="md:flex justify-between item-center py-6">
      <div className="relative w-20 h-16">
        <Image
          src="/assets/images/p-10/logo.png"
          alt="squid-bg"
          objectFit="contain"
          layout="fill"
          objectPosition="center"
        />
      </div>
      <div className="text-white md:space-x-16 space-x-4 flex items-center font-semibold text-lg">
        <ol className="cursor-pointer">Home</ol>
        <ol className="cursor-pointer">Categories</ol>
        <ol className="cursor-pointer">Favourites</ol>
        <ol className="cursor-pointer">Cart</ol>
        <RiSearchLine size={25} />
      </div>
    </div>
  );
};

export default Nav;
