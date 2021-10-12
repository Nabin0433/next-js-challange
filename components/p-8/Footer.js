import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t border-gray-600 w-[80vw] py-4">
      <div className="flex justify-between py-6">
        <div className="relative h-8 w-40  cursor-pointer">
          <Image
            src="/assets/images/p-8/logo.svg"
            alt="nabin"
            layout="fill"
            objectPosition="center"
            objectFit="fill"
          />
        </div>
        <div className="flex space-x-8 text-gray-400">
          <ol className="hover:text-gray-200 cursor-pointer">Product</ol>
          <ol className="hover:text-gray-200 cursor-pointer">Pricing Plans</ol>
          <ol className="hover:text-gray-200 cursor-pointer">FAQ</ol>
          <ol className="hover:text-gray-200 cursor-pointer">Blog</ol>
        </div>
        <div className="flex space-x-8 items-center">
          <FaFacebookF
            className="cursor-pointer hover:text-gray-600"
            size={20}
          />
          <FaTwitter className="cursor-pointer hover:text-gray-600" size={20} />
          <FaInstagram
            className="cursor-pointer hover:text-gray-600"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
