import Image from "next/image";
const Header = () => {
  return (
    <div className="pt-4 pb-2 px-20 hidden md:flex items-center justify-between">
      <div className="relative h-20 w-40">
        <Image
          src="/assets/images/p-9/logo.png"
          alt="nabin"
          objectPosition="center"
          layout="fill"
          objectFit="fill"
        />
      </div>

      <div className="flex items-center md:space-x-24">
        <ol className="text-[#FA4A0C] cursor-pointer text-lg font-semibold">
          Home
        </ol>
        <ol className="hover:text-[#FA4A0C] cursor-pointer text-lg font-semibold">
          Products
        </ol>
        <ol className="hover:text-[#FA4A0C] cursor-pointer text-lg font-semibold">
          Faq
        </ol>
        <ol className="hover:text-[#FA4A0C] cursor-pointer text-lg font-semibold">
          Contact
        </ol>
      </div>
    </div>
  );
};

export default Header;
