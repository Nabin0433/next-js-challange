import { useRouter } from "next/dist/client/router";
import { FaHome } from "react-icons/fa";

const Header = ({ props }) => {
  const router = useRouter();
  return (
    <header className="flex justify-between items-center p-4 md:p-8">
      <div>
        <ul
          className={`cursor-pointer text-black hover:text-yellow-800`}
          onClick={() => router.push("/")}
        >
          <FaHome size={40} />
        </ul>
      </div>
      <div className="flex justify-end items-center space-x-4 font-medium text-xl">
        <ul
          className={`cursor-pointer ${
            props === "work" ? "text-red-600" : "hover:text-yellow-400"
          }`}
          onClick={() => router.push("/work")}
        >
          Works
        </ul>
        <ul
          className={`cursor-pointer ${
            props === "blog" ? "text-red-600" : "hover:text-yellow-400"
          }`}
          onClick={() => router.push("/blog")}
        >
          Blog
        </ul>
        <ul
          className={`cursor-pointer ${
            props === "contact" ? "text-red-600" : "hover:text-yellow-400"
          }`}
          onClick={() => router.push("/contact")}
        >
          Contact
        </ul>
      </div>
    </header>
  );
};

export default Header;
