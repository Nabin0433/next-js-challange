import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const size = 35;
  return (
    <footer className="bg-white flex justify-center items-center flex-col mt-16 mb-10">
      <div className="flex items-center justify-around text-black space-x-4 cursor-pointer">
        <FaFacebookSquare
          size={size}
          className="hover:animate-bounce transition duration-200"
        />
        <FaInstagram
          size={size}
          className="hover:animate-bounce transition duration-200"
        />
        <FaTwitter
          size={size}
          className="hover:animate-bounce transition duration-200"
        />
        <FaLinkedin
          size={size}
          className="hover:animate-bounce transition duration-200"
        />
      </div>
      <p className="font-normal text-sm mt-8">
        Copyright ©{new Date().getFullYear()} All rights reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
