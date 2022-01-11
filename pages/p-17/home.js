import Image from "next/image";

const home = () => {
  return (
    <div
      className="w-full min-h-[800px] h-[100vh] px-6 lg:px-20 py-2 lg:py-6"
      style={{
        background:
          "conic-gradient(from 128.6deg at 73.47% 55.13%, #F67893 -16.88deg, #DC267E 35.62deg, #2F1F6A 106.88deg, #5C2258 191.25deg, #845280 283.13deg, #F67893 343.12deg, #DC267E 395.63deg)",
      }}
    >
      {/* nav*/}
      <div className="lg:flex justify-between items-center text-white text-sm space-y-4 lg:space-y-0">
        {/* left */}
        <div className="cursor-pointer text-lg">
          <p>Reality Pay</p>
        </div>
        {/* mid */}
        <div className="flex items-center space-x-3 lg:space-x-12">
          <ul className="text-gray-400 cursor-pointer hover:text-gray-200">
            Features
          </ul>
          <ul className="text-gray-400 cursor-pointer hover:text-gray-200">
            Saving
          </ul>
          <ul className="text-gray-400 cursor-pointer hover:text-gray-200">
            Payments
          </ul>
          <ul className="text-gray-400 cursor-pointer hover:text-gray-200">
            Product
          </ul>
          <ul className="text-gray-400 cursor-pointer hover:text-gray-200">
            About
          </ul>
        </div>
        {/* right */}
        <div className="hidden lg:block">
          <p className="hover:text-gray-400 cursor-pointer text-gray-200 text-base">
            Get App Now
          </p>
        </div>
      </div>
      {/* main */}
      <div className="flex items-start mt-20 lg:mt-40">
        {/* left */}
        <div className="w-1/3 min-w-[300px] text-white z-20">
          <p className="text-xs text-[#F2C94C]">
            Switch to the newest and modern digital wallet
          </p>
          <h2 className="lg:text-6xl text-3xl mt-4 tracking-wider">
            Easy and Fast Payments With Reality Pay
          </h2>
          <p className="font-light text-xs mt-6 text-gray-300 leading-5">
            With integration and well-build digital wallet, control your own
            cards and list all your payments to pay. Set your own code key to
            makes all payments done with only one approve action.
          </p>
          <div className="mt-8 flex items-center space-x-1 md:space-x-3">
            <button className="py-3 px-3 md:px-6 text-xs md:text-sm bg-[#F22987] hover:bg-[#f32485] rounded-full">
              Open Account Now
            </button>
            <button className="py-3 px-3 md:px-6 text-xs md:text-sm rounded-full hover:text-gray-200">
              Download App Now
            </button>
          </div>
        </div>
        {/* right */}
        <div className="w-full lg:w-2/3 h-[500px] relative flex justify-center items-center opacity-40 md:opacity-100">
          <div className="md:w-80 md:h-80 w-60 h-60 absolute -right-0 md:right-10 -bottom-3 z-0">
            <Image
              src="/assets/images/p-17/ring.png"
              alt="reality-pay"
              layout="fill"
              objectPosition="center"
              objectFit="contain"
            />
          </div>
          <div className="absolute md:w-[400px] md:h-[400px] h-[300px] w-[300px] bottom-8 md:bottom-14 -right-0 md:right-8 z-0">
            <Image
              src="/assets/images/p-17/round.png"
              alt="reality-pay"
              layout="fill"
              objectPosition="center"
              objectFit="contain"
            />
          </div>
          <div className="absolute lg:w-[650px] lg:h-[650px] w-[500px] h-[500px] bottom-0 -right-0 md:right-12 z-0">
            <Image
              src="/assets/images/p-17/card.png"
              alt="reality-pay"
              layout="fill"
              objectPosition="center"
              objectFit="contain"
            />
          </div>
          <div className="absolute md:w-[60px] md:h-[60px] w-20 h-20 bottom-14 right-52 md:right-[400px] z-0">
            <Image
              src="/assets/images/p-17/arrow.png"
              alt="reality-pay"
              layout="fill"
              objectPosition="center"
              objectFit="contain"
            />
            <p className="tracking-wide font-medium text-xs md:text-lg text-white w-80 absolute -bottom-8 lg:-bottom-10 -right-48 lg:-right-28">
              Trusted by 230,394 users
            </p>
          </div>
          <div
            className="absolute w-6 h-6 rounded-full -top-10 lg:-top-20 right-20 z-0"
            style={{
              background:
                "linear-gradient(215.42deg, #F67893 6.65%, rgba(231, 143, 162, 0.703125) 46.66%, #DC267E 85.84%)",
              boxShadow: "inset 0px -10px 10px rgba(113, 20, 148, 0.7)",
              transform: "rotate(-175.83deg)",
            }}
          />
          <div
            className="absolute w-16 h-16 rounded-full -top-4 lg:-top-16 right-60 z-0"
            style={{
              background:
                "linear-gradient(215.42deg, #F67893 6.65%, rgba(231, 143, 162, 0.703125) 46.66%, #DC267E 85.84%)",
              boxShadow: "inset 0px -10px 20px rgba(84, 14, 149, 0.8)",
            }}
          />
          <div
            className="absolute w-12 h-12 rounded-full bottom-20 md:bottom-28 right-[290px] md:right-[500px] z-0"
            style={{
              background:
                "linear-gradient(215.42deg, #9B51E0 6.65%, #6112AA 46.66%, #28024B 85.84%)",
              boxShadow: "inset 0px -10px 10px rgba(113, 20, 148, 0.7)",
              transform: "rotate(-27.28deg)",
            }}
          />
          <div
            className="absolute w-20 h-20 rounded-full -bottom-16 md:-bottom-12 right-[150px] md:right-[250px] z-0"
            style={{
              background:
                "linear-gradient(216.59deg, #3D2065 -13.63%, #4A2160 46.62%, #392067 96.54%)",
              boxShadow: "inset 0px -20px 20px #380A5C",
              transform: "rotate(35.87deg)",
            }}
          />
          <div
            className="absolute w-12 h-12 rounded-full bottom-4 right-[2%] z-0"
            style={{
              background:
                "linear-gradient(318.32deg, #3E2065 -67.5%, #190A3E 17.12%, #D688E1 100%)",
              boxShadow: "inset 0px -10px 20px rgba(84, 14, 149, 0.8)",
            }}
          />
        </div>
      </div>
      <p className="text-white text-xs md:text-sm tracking-wide mt-20 lg:mt-0">
        Find more details and learn more about digital wallet{" "}
        <span className="text-yellow-400 hover:underline cursor-pointer">
          here
        </span>
      </p>
    </div>
  );
};

export default home;
