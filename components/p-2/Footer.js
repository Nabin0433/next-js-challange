const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)",
      }}
      className="grid md:grid-cols-5 py-16 md:px-60 px-8 text-white font-light md:space-x-24 space-y-8 md:space-y-0"
    >
      <div className="col-span-2 space-y-10">
        <div className="font-bold text-3xl flex items-center space-x-3">
          <span className="bg-white text-blue-600 flex items-center justify-center rounded-full h-10 w-10">
            T
          </span>
          <p>Trafalgar</p>
        </div>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p>
          ©Trafalgar PTY LTD {new Date().getFullYear().toString()}. All rights
          reserved
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-2xl">Company</h2>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          About
        </p>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          Testimonials
        </p>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          Find a doctor
        </p>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          Apps
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-2xl">Region</h2>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          Indonesia
        </p>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          Singapore
        </p>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          Hongkong
        </p>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          Canada
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-2xl">Help</h2>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          Help center
        </p>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          Contact support
        </p>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          Instructions
        </p>
        <p className="hover:text-gray-600 cursor-pointer duration-200 hover:underline transition">
          How it works
        </p>
      </div>
    </footer>
  );
};

export default Footer;
