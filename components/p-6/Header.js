import { RiAccountPinCircleLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="px-6 md:px-20 py-5 fixed w-full top-0 z-10 text-white ">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl tracking-widest cursor-pointer">MNTN</h2>
        <div className="md:flex items-center space-x-8 hidden">
          <ul className="font-bold text-lg hover:text-gray-600 cursor-pointer">
            Equipment
          </ul>
          <ul className="font-bold text-lg hover:text-gray-600 cursor-pointer">
            About us
          </ul>
          <ul className="font-bold text-lg hover:text-gray-600 cursor-pointer">
            Blog
          </ul>
        </div>
        <div>
          <ul className="font-bold text-lg hover:text-gray-600 cursor-pointer flex items-center space-x-2">
            <RiAccountPinCircleLine />
            <p> Account</p>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
