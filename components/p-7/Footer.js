import { useRouter } from "next/dist/client/router";

const Footer = ({ social, title, name, Fitem }) => {
  const router = useRouter();
  const items = [
    {
      title: "Develop",
      item: [
        "Docs",
        "Developer resources",
        "Developer experts",
        "Bootcamp",
        "Price feeds",
        "Randomness",
        "External API calls",
        "Contract reference",
        "Node operators",
      ],
    },
    {
      title: "Solutions",
      item: [
        "Overview",
        "Decentralized Market Data",
        "Verifiable Randomness",
        "Keepers & Compute",
        "Cross-Chain Bridging",
        "Randomness",
        "Enterprise Solutions",
      ],
    },
    {
      title: "Community",
      item: [
        "Chainlink Hackathon",
        "Community overview ",
        "Verifiable ",
        "Grant program",
        "Events ",
        "Become an advocate",
        "Code of conduct",
      ],
    },
    {
      title: "Chainlink",
      item: [
        "Whitepaper",
        "Blog ",
        "Ecosystem ",
        "Data Providers",
        "Press",
        "Team",
        "Brand assets",
        "FAQs",
      ],
    },
  ];
  return (
    <footer className="border-t-2 border-gray-100 rounded-lg bg-white">
      <div className=" flex md:justify-center  md:px-20 px-8 bg-gray-50 border-b">
        {/* grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-0 lg:grid-cols-5 */}
        {/* {items.map((item, index) => (
          <div key={index} className="space-y-4">
            <h2 className="font-semibold text-lg">{item.title}</h2>
            {item.item.map((i, indexx) => (
              <ul
                key={indexx}
                className="text-gray-600 cursor-pointer text-sm md:text-base hover:text-gray-400"
              >
                {i}
              </ul>
            ))}
          </div>
        ))} */}
        <div className="md:space-x-4 space-y-2 md:space-y-0 md:items-center md:flex py-8">
          <h2 className="font-semibold text-lg">Social : </h2>
          {social?.map((i, id) => (
            <ul
              onClick={() => router.push(social.link ?? "/")}
              key={i.id}
              className="text-gray-600 cursor-pointer text-sm md:text-base hover:text-gray-400 flex space-x-3 items-center"
            >
              {i.icon}
              <p> {i.title}</p>
            </ul>
          ))}
        </div>
      </div>
      <div className="md:px-40 px-8 md:py-8 py-4 md:flex items-center md:justify-between justify-center bg-gray-50 text-gray-600  space-y-3 md:space-y-0">
        <div className="md:flex items-center md:space-x-8 space-y-3 md:space-y-0">
          <div className="hidden md:flex space-x-4 items-center">
            <ul className="hover:text-gray-500 cursor-pointer text-sm md:text-base">
              ® {name}
            </ul>
          </div>
          <p>
            © {new Date().getFullYear().toString()} {title}
          </p>
        </div>
        <div className="flex items-center space-x-8">
          <ul className="hover:text-gray-500 cursor-pointer text-sm md:text-base">
            Privacy Policy
          </ul>
          <ul className="hover:text-gray-500 cursor-pointer text-sm md:text-base">
            Terms of Use
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
