import Head from "next/head";
import Image from "next/image";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import { useRouter } from "next/dist/client/router";

const Step2 = () => {
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    router.push("/p-5/home");
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
                onClick={() => router.push("/p-5/individual-2")}
              >
                <RiArrowLeftSLine size={22} />
                <p>Back</p>
              </div>
              <div>
                <p className="text-xs text-right">STEP 03/03</p>
                <p>Bank Verification.</p>
              </div>
            </div>
            {/* form */}
            <div className=" md:mt-20 mt-12 px-2 md:px-36 space-y-6">
              <h2 className="font-bold md:text-4xl text-2xl">
                Complete Your Profile!
              </h2>
              <p className="font-normal text-gray-400 md:text-base text-sm">
                For the purpose of industry regulation, your details are
                required.
              </p>
              <form className="pt-4 space-y-6" onSubmit={submit}>
                <div className="flex flex-col space-y-6">
                  <label
                    className="font-medium text-lg text-gray-400 tracking-wider"
                    htmlFor="Bank"
                  >
                    Bank verification number (BVN)
                  </label>
                  <input
                    required
                    type="text"
                    name="Bank"
                    id="Bank"
                    placeholder="090912345567"
                    className="pl-8 md:w-4/6 h-14 hover:shadow-lg rounded-md outline-none focus:border-blue-600 border border-gray-400"
                  />
                </div>
                <div className="md:py-6 py-2" />
                <button className="py-5 font-light text-sm rounded text-white hover:bg-blue-700 md:w-4/6 w-full shadow-lg hover:shadow-2x bg-blue-500">
                  Save & Continue
                </button>
                <div className="flex justify-center items-center space-x-3 md:w-4/6 md:pt-8">
                  <MdLockOutline size={20} />
                  <p className="text-sm font-light text-gray-400">
                    Your Info is safely secured
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Step2;
