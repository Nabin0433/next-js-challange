import Card from "../../components/p-7/Card";
import Header from "../../components/p-7/Header";
import Image from "next/image";
import CodeCard from "../../components/p-7/CodeCard";
import LightSpeed from "react-reveal/LightSpeed";
import Roll from "react-reveal/Roll";

import CardDeck from "../../components/p-7/mobiles/CardDeck";
import Footer from "../../components/p-7/Footer";
import AnimatedContact from "../../components/p-7/AnimatedContact";

import { GoArrowSmallDown } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import WaterWave from "../../components/animations/WaterWave";

const Home = () => {
  const scroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Header />
      <main>
        <div className="w-screen relative h-[900px] bg-gray-200 text-gray-600 overflow-hidden">
          <LightSpeed left>
            <Image
              className="opacity-20"
              src="/assets/images/p-7/bg.png"
              alt="bg"
              layout="fill"
              objectFit="fill"
              objectPosition="center"
            />
            <div className="absolute md:top-1/3 md:left-20 top-20 left-8 space-y-8 md:w-1/3 ">
              <h2 className="font-bold text-4xl">
                Securely connect smart contracts with off-chain data and
                services
              </h2>
              <p className="font-normal md:text-md text-xs">
                Chainlink decentralized oracle networks provide tamper-proof
                inputs, outputs, and computations to support advanced smart
                contracts on any blockchain.
              </p>
              <div className="flex space-x-8">
                <a href="callto:9824317734">
                  <button className="px-6 py-2 cursor-pointer border hover:text-gray-500 border-gray-400 hover:shadow-lg active:scale-95 transform transition duration-150 rounded-xl">
                    Contact
                  </button>
                </a>
                <a href="mailto:Day1x.com.np">
                  <button className="px-6 py-2 cursor-pointer border hover:text-gray-500 border-gray-400 hover:shadow-lg active:scale-95 transform transition duration-150 rounded-xl">
                    Mail us
                  </button>
                </a>
              </div>
            </div>
          </LightSpeed>
          <LightSpeed right>
            <div className="absolute cursor-move pointer-events-none md:pointer-events-auto md:top-1/3 top-[55%] md:right-20 md:space-y-8 md:w-1/3">
              <CodeCard text="" />
            </div>
          </LightSpeed>
          <LightSpeed center>
            <div className="absolute md:bottom-20 bottom-4 left-4 md:left-1/2">
              <button
                className=" w-14 h-14 cursor-pointer bg-gray-100 shadow-2xl hover:text-gray-400 text-gray-600 hover:shadow-md active:scale-95 transform transition duration-150 rounded-full flex justify-center items-center"
                onClick={() => scroll("projects")}
              >
                <GoArrowSmallDown size={35} />
              </button>
            </div>
          </LightSpeed>
        </div>
        <div id="projects" className="md:space-y-20  md:px-20 py-4 px-0">
          <h2 className="text-center font-semibold text-4xl border-b py-6">
            Projects
          </h2>
          <div className="flex overflow-x-scroll overflow-y-hidden md:space-x-14 space-x-8 py-8 md:p-6 shadow-sm rounded-lg">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <Roll key={index} left>
                  <div className="min-w-[400px] cursor-pointer flex-grow h-[400px] shadow-2xl  border-gray-600 rounded-2xl hover:shadow-md group p-8 space-y-6 transition duration-150 ">
                    <h2 className="font-semibold md:text-2xl text-lg group-hover:text-gray-500">
                      Reliable, tamper-proof network
                    </h2>
                    <p className="text-xs md:text-base font-normal group-hover:text-gray-400">
                      Use decentralization, trusted nodes, premium data, and
                      cryptographic proofs to connect highly accurate and
                      available data/APIs to any smart contract.
                    </p>
                    <p className="text-sm md:text-base group-hover:text-gray-500">
                      Learn More {">"}
                    </p>
                  </div>
                </Roll>
              ))}
          </div>
        </div>
        <h2 className="md:text-4xl text-2xl md:ont-extrabold font-bold text-center py-6 border-b">
          Our Employes
        </h2>
        <div
          id="employes"
          className="relative w-full h-screen mt-0"
          style={{
            overscrollBehaviorY: "contain",
            userSelect: "none",
            overflow: "hidden",
          }}
        >
          <div
            className="w-full absolute inset-0 bg-gray-100 new"
            style={{
              cursor:
                "url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto",
            }}
          >
            <CardDeck />
          </div>
        </div>
      </main>
      <AnimatedContact />
      <div id="about" className="text-gray-200 bg-gray-700">
        <div className="lg:px-80 md:px-20 px-8 py-4">
          <h2 className="font-bold text-4xl md:py-10 py-20">Contact us</h2>
          <div className="cursor-pointer md:flex items-center md:space-x-8 bg-gray-700">
            <div className="relative md:h-40 md:w-60 h-20 w-40 bg-gray-900 rounded-lg">
              <Image
                className=" rounded-lg"
                src="/assets/images/p-7/logo.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="space-y-2 text-gray-400 py-8 md:p-0">
              <p className="font-semibold text-gray-200">Day1x pvt ltd.</p>
              <p>Prasiddhi Tower, Pulchowk, Lalitpur - 3, Nepal</p>
              <div className="flex items-center space-x-4">
                <div className="hover:text-gray-800 flex space-x-2 items-center">
                  <IoCall size={16} />
                  <a href="callto:9824317734">9824317734</a>
                </div>
                <div className="hover:text-green-600 flex space-x-2 items-center">
                  <HiMail size={16} />
                  <a href="mailto:Day1x@gmail.com">Day1x@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
