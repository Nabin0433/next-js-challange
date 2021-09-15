import { useRouter } from "next/dist/client/router";

const Header = ({ props }) => {
  const router = useRouter();
  return (
    <header className="flex justify-end items-center space-x-4 font-medium text-xl p-4 md:p-8">
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
    </header>
  );
};

export default Header;
