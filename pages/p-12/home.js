import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const home = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="md:flex hidden justify-center items-center relative w-[60%] h-full">
          <Image
            src="/assets/images/p-12/left.png"
            alt=""
            layout="fill"
            objectFit="fill"
            objectPosition="center"
          />
        </div>
        <div className="md:p-20 p-6">
          <div className="w-[60px] h-[60px] relative mb-10 md:mt-10">
            <Image
              src="/assets/images/p-12/logo-12.png"
              alt=""
              layout="fill"
              objectFit="fill"
              objectPosition="center"
            />
          </div>
          <h2 className="text-[#525252] font-bold text-2xl">
            Login to your Account
          </h2>
          <p className="text-[#525252] mb-10 mt-2">
            See what is going on with your businesst
          </p>
          <button className="border flex space-x-3 items-center justify-center text-[#828282] text-bold rounded-md w-full py-3 active:scale-95 hover:shadow hover:bg-gray-100 transform transition duration-200">
            <FcGoogle size={20} />
            <p> Continue with Google</p>
          </button>
          <div className="flex justify-center items-center my-10">
            <p classNam="font-semibold md:text-sm text-xs text-[#A1A1A1]">
              ----------- or Sign in with Email -----------
            </p>
          </div>
          <form className="flex flex-col">
            <label className="text-[#828282] text-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="h-10 rounded-md border outline-none pl-4"
              type="email"
              name="email"
              id="email"
              placeholder="test@gmail.com"
            />
            <label
              className="text-[#828282] text-semibold mt-4"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="h-10 rounded-md border outline-none pl-4"
              type="password"
              name="password"
              id="password"
              placeholder="*******"
            />
            <div className="flex justify-between items-center my-6">
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <p className="text-[#A1A1A1] test-sm font-normal">
                  Remember Me
                </p>
              </div>
              <a className="hover:text-[#7F285B] text-[#6e2150]" href="#">
                Forgot Password?
              </a>
            </div>
            <button
              className="bg-[#7F265B] hover:bg-[#a32771] rounded-md w-full py-3 text-white font-bold font-xl mt-4 active:scale-95 hover:shadow transform transition duration-200"
              type="submit"
              disable
            >
              Login
            </button>
          </form>
          <div className="flex items-center space-x-2 md:mt-20 mt-14">
            <span className="text-[#828282] text-sm font-normal">
              Not Registered Yet?
            </span>
            <span className="text-[#7F265B] hover:text-[#7e1755] text-sm font-semibold cursor-pointer hover:underline">
              Create an account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
