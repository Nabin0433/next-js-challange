import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="md:px-80 py-8">
      <div className="flex md:flex-row flex-col  items-center justify-between">
        <div className="relative hidden md:block h-20 w-40">
          <Image
            src="/assets/images/p-9/logo.png"
            alt="nabin"
            objectPosition="center"
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="flex space-x-5 mt-4 text-[#FA4A0C] cursor-pointer">
          <AiFillFacebook size={35} />
          <AiFillInstagram size={35} />
          <AiOutlineTwitter size={35} />
        </div>
        <div className="cursor-help">
          <p className="text-[#5C5C5C] font-bold text-sm mt-4">
            Copywright 2020 Bella Onojie.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
