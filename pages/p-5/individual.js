import Head from "next/head";
import Image from "next/image";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/dist/client/router";

const Individual = () => {
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    router.push("/p-5/individual-2");
  };

  return (
    <div>
      <Head>
        <title>Individual</title>
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
          <div className="md:w-8/12 p-4 py-8 md:p-20 ">
            <div className="items-center flex justify-between text-gray-600 font-light">
              <div
                className="flex space-x-2 items-center cursor-pointer"
                onClick={() => router.push("/p-5/home")}
              >
                <RiArrowLeftSLine size={22} />
                <p>Back</p>
              </div>
              <div>
                <p className="text-xs text-right">STEP 01/03</p>
                <p>Personal Info.</p>
              </div>
            </div>
            {/* form */}
            <div className=" md:mt-20 mt-12 px-2 md:px-36 space-y-4">
              <h2 className="font-bold md:text-4xl text-2xl">
                Register Individual Account!
              </h2>
              <p className="font-normal text-gray-400 md:text-base text-sm">
                For the purpose of industry regulation, your details are
                required.
              </p>
              <form className="pt-4 space-y-6" onSubmit={submit}>
                <div className="flex flex-col space-y-3">
                  <label
                    className="font-medium text-lg text-gray-400 tracking-wider"
                    htmlFor="name"
                  >
                    Your fullname *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Invictus Innocent"
                    className="pl-8 md:w-4/6 h-14 hover:shadow-lg rounded-md outline-none focus:border-blue-600 border border-gray-400"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label
                    className="font-medium text-lg text-gray-400 tracking-wider"
                    htmlFor="email"
                  >
                    Email address *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="pl-8 md:w-4/6 h-14 hover:shadow-lg rounded-md outline-none focus:border-blue-600 border border-gray-400"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label
                    className="font-medium text-lg text-gray-400 tracking-wider"
                    htmlFor="password"
                  >
                    Create password *
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="******"
                    className="pl-8 md:w-4/6 h-14 hover:shadow-lg rounded-md outline-none focus:border-blue-600 border border-gray-400"
                  />
                </div>
                <div className="flex items-center space-x-4 text-gray-500 font-medium">
                  <input required type="checkbox" name="box" />
                  <p>I agree to terms & conditions</p>
                </div>
                <button className="py-5 font-light text-sm rounded text-white hover:bg-blue-700 md:w-4/6 w-full shadow-lg hover:shadow-2x bg-blue-500">
                  Register Account
                </button>
                <button className="py-4 justify-center space-x-6 px-8 flex items-center rounded text-black w-full shadow-lg hover:shadow-2xl md:w-4/6">
                  <FcGoogle size={30} />
                  <span className="font-light text-sm">
                    Register with Google
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Individual;
