import Image from "next/image";
const Header = () => {
  return (
    <header className="bg-transparent w-full md:py-6 md:px-20 pl-8 z-30 absolute">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-80">
          <div className="relative h-8 w-40  cursor-pointer">
            <Image
              src="/assets/images/p-8/logo.svg"
              alt="nabin"
              layout="fill"
              objectPosition="center"
              objectFit="fill"
            />
          </div>
          <div className=" hidden md:flex item-center space-x-8 text-gray-500 font-semibold text-lg">
            <ul className=" cursor-pointer hover:text-gray-400">Products</ul>
            <ul className=" cursor-pointer hover:text-gray-400">Pricing</ul>
            <ul className=" cursor-pointer hover:text-gray-400">FAQ</ul>
            <ul className=" cursor-pointer hover:text-gray-400">Blog</ul>
            <ul className=" cursor-pointer hover:text-gray-400">About</ul>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="md:py-2 py-1 rounded-full md:px-8 px-4 text-gray-500 hover:text-gray-400">
            Sign in
          </button>
          <button className="md:border text-gray-500 hover:text-gray-400 border-gray-400 rounded-full md:py-2 py-1 md:px-8 px-4 active:scale-90 transition duration-150 hover:bg-gray-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
