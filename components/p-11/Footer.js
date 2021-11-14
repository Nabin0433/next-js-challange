import { FilledButton } from "./Buttons";

const Footer = () => {
  return (
    <footer className="p-8 md:p-0 pt-20">
      <div className="flex justify-center items-center flex-col space-y-6">
        <h2 className="font-bold md:text-6xl text-2xl md:mt-8">
          Get better work
        </h2>
        <p className="md:w-1/4">
          See why million of people accross 195 uses Desh dot
        </p>
        <div className="flex items-center space-x-4">
          <input
            className="pl-4 border shadow outline-none h-10 md:w-60 w-48 rounded-xl"
            type="text"
            placeholder="artalisajid@gmail.com"
          />
          <FilledButton text="Try Free" />
        </div>
      </div>
      <div className="md:px-40 pt-20 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between">
          <div className="text-[#7D7D7D] font-normal text-lg">
            <h2 className="font-bold text-xl text-black">Reality Travel </h2>
            <p className="my-4 cursor-help">Lorem ipsum ,</p>
            <p className="my-4 cursor-help">Lorem ipsum ,</p>
          </div>
          <div className="w-1/3">
            <h2 className="font-bold text-xl text-black mb-4">Links</h2>
            <p className="hover:text-gray-600 cursor-pointer">Home</p>
            <p className="hover:text-gray-600 cursor-pointer">Prior</p>
            <p className="hover:text-gray-600 cursor-pointer">Donload</p>
            <p className="hover:text-gray-600 cursor-pointer">About</p>
            <p className="hover:text-gray-600 cursor-pointer">Service</p>
          </div>
          <div className=" w-1/3">
            <h2 className="font-bold text-xl text-black mb-4">Support</h2>
            <p className="hover:text-gray-600 cursor-pointer">FAQ</p>
            <p className="hover:text-gray-600 cursor-pointer"> How it</p>
            <p className="hover:text-gray-600 cursor-pointer">Features</p>
            <p className="hover:text-gray-600 cursor-pointer">Contact</p>
            <p className="hover:text-gray-600 cursor-pointer">Reporting</p>
          </div>
          <div className="text-[#7D7D7D] font-normal text-lg mt-4 md:mt-0">
            <h2 className="font-bold text-xl text-black">Reality Travel </h2>
            <p className="w-1/2 mt-4 cursor-help">+9824317734</p>
            <p className="w-1/2 cursor-help">RealityT&T@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="md:px-20 py-4 flex justify-between items-center text-[#7D7D7D] text-lg">
        <p>Copyright & Build by Nabin</p>
        <div className="flex items-center md:space-x-20 ">
          <p className="cursor-help">Terms of use</p>
          <p className="cursor-help">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
