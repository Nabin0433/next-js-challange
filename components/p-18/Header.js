import Link from "next/link";

const Header = ({ data }) => (
  <div className="flex flex-col md:flex-row justify-between items-center tracking-wide italic space-y-8 md:space-y-0">
    <div className=" cursor-pointer">
      <Link href="/p-18/home">
        <h1 className="text-xl font-sans font-medium">
          {"<"}Code{"/>"}
        </h1>
      </Link>
    </div>
    {/* right */}
    <div className="flex space-x-3 lg:space-x-8 text-sm">
      <ol className="cursor-pointer hover:text-gray-400">
        {"<"}Work{"/>"}
      </ol>
      <ol className="cursor-pointer hover:text-gray-400">
        {"<"}About{"/>"}
      </ol>
      <ol className="cursor-pointer hover:text-gray-400">
        {"<"}Playground{"/>"}
      </ol>
      <div className="cursor-pointer hover:text-gray-400">
        <Link href={"/p-18/contact"}>
          <p>
            {"<"}Contact{"/>"}
          </p>
        </Link>
      </div>
    </div>
  </div>
);
export default Header;
