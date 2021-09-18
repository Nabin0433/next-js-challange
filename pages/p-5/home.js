import Head from "next/head";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiShieldUserFill } from "react-icons/ri";
import { IoBusiness } from "react-icons/io5";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <div className="md:flex justify-start item-center">
          {/* left */}
          <div className="relative hidden md:block w-4/12 h-screen">
            <Image
              src="/assets/images/p-5/1.png"
              alt="day-5"
              layout="fill"
              objectPosition="center"
              objectFit="fill"
            />
          </div>
          {/* right */}
          <div className="md:w-8/12 p-2 py-8 md:p-20 ">
            <div className="flex space-x-2 justify-end items-center font-light">
              <p>Already have an account ? </p>
              <p className="text-blue-600 cursor-pointer hover:text-blue-700">
                Sign In
              </p>
            </div>
            <div className="md:mt-40 mt-16 md:px-44 space-y-4">
              <h2 className="font-bold text-4xl text-center md:text-left">
                Join Us!
              </h2>
              <p className="md:w-1/2 font-light text-sm text-gray-500 text-center md:text-left">
                To begin this journey, tell us what type of account you’d be
                opening.
              </p>
              <br />
              <div
                className="shadow flex items-center px-8 py-10 space-x-16 rounded-xl hover:shadow-lg"
                onClick={() => router.push("/p-5/individual")}
              >
                <p className="text-blue-600">
                  <RiShieldUserFill size={60} />
                </p>
                <div>
                  <h2 className="font-semibold text-xl">Individual</h2>
                  <p className="font-extralight text-sm">
                    Personal account to manage all you activities.
                  </p>
                </div>
                <p className="text-blue-600">
                  <IoIosArrowRoundForward size={35} />
                </p>
              </div>
              <div className="shadow flex items-center px-8 py-10 space-x-16 rounded-xl hover:shadow-lg">
                <p className="text-blue-600">
                  <IoBusiness size={60} />
                </p>
                <div>
                  <h2 className="font-semibold text-xl">Business</h2>
                  <p className="font-extralight text-sm">
                    Own or belong to a company, this is for you.
                  </p>
                </div>
                <p className="text-blue-600">
                  <IoIosArrowRoundForward size={35} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
