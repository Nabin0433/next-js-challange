const Footer = () => {
  return (
    <div className="bg-[#ECEEF4] px-40 py-16">
      <div className="grid grid-cols-7 items-start gap-20 text-gray-500">
        <div className="col-span-2 space-y-2">
          <h2 className="font-bold text-xl text-black">CarVenture</h2>
          <p>Rides for the daily</p>
          <p>achievers</p>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-xl text-black">Company</h2>
          <p className="cursor-pointer hover:text-gray-800">About Us</p>
          <p className="cursor-pointer hover:text-gray-800">Careers</p>
          <p className="cursor-pointer hover:text-gray-800">Support</p>
          <p className="cursor-pointer hover:text-gray-800">
            Terms and Conditions
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-xl text-black">Features</h2>
          <p className="cursor-pointer hover:text-gray-800">Vehicle Tracker</p>
          <p className="cursor-pointer hover:text-gray-800">
            iOS & Android Apps
          </p>
          <p className="cursor-pointer hover:text-gray-800">Business Trips</p>
          <p className="cursor-pointer hover:text-gray-800">Locations</p>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-xl text-black">Contact Us</h2>
          <p className="cursor-pointer hover:text-gray-800">
            Nabin0433@gmail.com
          </p>
          <p className="cursor-pointer hover:text-gray-800">+977-9824317734</p>
          <p className="cursor-pointer hover:text-gray-800">Nepal</p>
          <p className="cursor-pointer hover:text-gray-800">
            Kathmandu , 24600{" "}
          </p>
        </div>
        <div className="col-span-2 ml-20 space-y-2">
          <h2 className="font-bold text-xl text-black">
            Get deals and discounts
          </h2>
          <p>Subscribe to our newsletter</p>
          <br />
          <input
            type="text"
            className="border shadow h-11 pl-4 w-60 rounded-md outline-none"
            placeholder="Email"
          />
        </div>
      </div>
      <p className="cursor-pointer font-semibold text-xl mt-16 hover:text-gray-800">
        © Copyright Nabin Karki.
      </p>
    </div>
  );
};

export default Footer;
