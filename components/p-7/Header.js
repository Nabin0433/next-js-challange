import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import LightSpeed from "react-reveal/LightSpeed";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  const scroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };
  return (
    <div className="bg-gray-200">
      <header className="hidden md:block py-4 md:px-20 px-8  shadow-md capitalize">
        <div className="flex justify-between items-center  text-lg font-semibold">
          <div>logo</div>
          <div className="flex items-center space-x-6">
            <a href="mailto:Day1x@gmail.com.np">
              <ul className="px-4 py-1 cursor-pointer hover:shadow-lg active:scale-95 transform transition duration-150 rounded-xl hover:rounded-2xl">
                Hire us
              </ul>
            </a>
            <ul
              className="px-4 py-1 cursor-pointer hover:shadow-lg active:scale-95 transform transition duration-150 rounded-xl hover:rounded-2xl"
              onClick={() => scroll("projects")}
            >
              Projects
            </ul>
            <ul
              className="px-4 py-1 cursor-pointer hover:shadow-lg active:scale-95 transform transition duration-150 rounded-xl hover:rounded-2xl"
              onClick={() => scroll("Develops")}
            >
              Develops
            </ul>
          </div>
          <div className="flex items-center space-x-6">
            <ul
              className="px-4 py-1 cursor-pointer hover:shadow-lg active:scale-95 transform transition duration-150 rounded-xl hover:rounded-2xl"
              onClick={() => scroll("contact")}
            >
              contact us
            </ul>
            <ul
              className="px-4 py-1 cursor-pointer hover:shadow-lg active:scale-95 transform transition duration-150 rounded-xl hover:rounded-2xl"
              onClick={() => scroll("about")}
            >
              about us
            </ul>
          </div>
        </div>
      </header>
      <header className="md:hidden">
        <div className="fixed top-0 right-0 z-30 p-2">
          <button
            className="px-6 mt-2 shadow active:shadow-lg active:scale-90"
            onClick={() => setOpen(true)}
          >
            <BiMenuAltRight size={40} />
          </button>
        </div>
        <Drawer
          style={{
            backgroundColor: "#EAEAEA",
            borderRadius: "8px",
            boxShadow: "-15px -13px 43px -2px rgba(0,0,0,0.40)",
          }}
          open={open}
          onClose={toggleDrawer}
          size={200}
          direction="right"
        >
          <div className="px-4 py-8 text-center space-y-6 text-lg font-semibold">
            {open && (
              <LightSpeed>
                <h2 className="font-bold text-2xl">Menu</h2>
                <p onClick={() => scroll("projects")}>Projects</p>
                <p>Develops</p>
                <p onClick={() => scroll("employes")}>Employes</p>
                <p>contact us</p>
                <p>about us</p>
                <p>Hire us</p>
              </LightSpeed>
            )}
          </div>
        </Drawer>
      </header>
    </div>
  );
};

export default Header;
