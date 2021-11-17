import Image from "next/image";
const Header = () => {
  return (
    <div className="md:flex justify-between items-center left-0 right-0 md:px-20 p-8 absolute top-0 py-8">
      <div className="relative hidden md:block w-40 h-40">
        <Image
          src={"/assets/images/p-13/logo.png"}
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div className="flex md:space-x-20 space-x-4 items-center text-xl font-bold">
        <ol className="cursor-pointer hover:text-[#41B092]">Home</ol>
        <ol className="cursor-pointer hover:text-[#41B092]">About</ol>
        <ol className="cursor-pointer hover:text-[#41B092]">Blog</ol>
        <ol className="cursor-pointer hover:text-[#41B092]">Contact</ol>
        <button className="bg-[#41B092] hidden md:inline text-base text-white hover:bg-[#2dac8a] active:scale-95 rounded-2xl px-2 py-1">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Header;
