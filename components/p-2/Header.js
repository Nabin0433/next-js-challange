import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

const Menus = (active, color) => {
  return (
    <div
      className={`md:flex space-y-8 md:space-y-0 items-center justify-end md:space-x-8 font-normal ${color}`}
    >
      <ul
        className={`${
          active === "home"
            ? "text-gray-900 underline"
            : "hover:text-gray-900 hover:underline"
        } cursor-pointer`}
      >
        Home
      </ul>
      <ul
        className={`${
          active === "doctor"
            ? "text-gray-900 underline"
            : "hover:text-gray-900 hover:underline"
        } cursor-pointer`}
      >
        Find a doctor
      </ul>
      <ul
        className={`${
          active === "apps"
            ? "text-gray-900 underline"
            : "hover:text-gray-900 hover:underline"
        } cursor-pointer`}
      >
        Apps
      </ul>
      <ul
        className={`${
          active === "testimonials"
            ? "text-gray-900 underline"
            : "hover:text-gray-900 hover:underline"
        } cursor-pointer`}
      >
        Testimonials
      </ul>
      <ul
        className={`${
          active === "about"
            ? "text-gray-900 underline"
            : "hover:text-gray-900 hover:underline"
        } cursor-pointer`}
      >
        About us
      </ul>
    </div>
  );
};

const Header = ({ active }) => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="bg-white sticky top-0 z-30">
      <div className="flex justify-between items-center shadow pb-4 pt-6 px-8 md:px-20">
        <div className="flex items-center space-x-3">
          <span className="bg-primary_p_2 rounded-full p-2 h-10 w-10 text-2xl font-extrabold flex justify-center items-center text-white">
            T
          </span>
          <span style={{ color: "#233348" }} className="font-bold text-lg">
            Trafalgar
          </span>
        </div>
        <div className="hidden md:block">{Menus(active, "text-gray-600")}</div>
        <div className="hover:text-primary_p_2 md:hidden">
          {!menu ? (
            <HiMenu size={30} onClick={() => setMenu(true)} />
          ) : (
            <MdCancel onClick={() => setMenu(false)} size={30} />
          )}
        </div>
        <div
          className={`md:hidden h-screen transform right-0 top-[5.8rem] fixed transition flex flex-col items-center text-white duration-200 bg-primary_p_2 ${
            !menu ? "-right-80 w-8" : "right-0 w-48"
          }`}
        >
          <h2 className="py-2 border-b-2 w-3/4 text-center border-gray-700 my-4">
            Menu
          </h2>
          {Menus(active, "text-white")}
        </div>
      </div>
    </header>
  );
};

export default Header;
