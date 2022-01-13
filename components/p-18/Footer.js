import Link from "next/link";

const Footer = ({ data }) => (
  <div className="flex flex-col md:flex-row justify-between items-center tracking-wide italic py-8 space-y-8 md:space-y-0">
    <div className=" cursor-pointer">
      <Link href="/p-18/home">
        <h1 className="text-sm font-sans font-medium">
          {"<"}Nabin ⏤ {new Date().getFullYear()}
          {"/>"}
        </h1>
      </Link>
    </div>
    {/* right */}
    <div className="flex space-x-3 lg:space-x-8 text-xs">
      <div className="cursor-pointer hover:text-gray-400">
        <Link href={data.gitLink}>
          <p>
            {"<"}GitHub{"/>"}
          </p>
        </Link>
      </div>
      <div className="cursor-pointer hover:text-gray-400">
        <Link href={data.linkInLink}>
          <p>
            {"<"}Linkedin{"/>"}
          </p>
        </Link>
      </div>
      <div className="cursor-pointer hover:text-gray-400">
        <Link href={data.instaLink}>
          <p>
            {"<"}Insta{"/>"}
          </p>
        </Link>
      </div>
    </div>
  </div>
);
export default Footer;
