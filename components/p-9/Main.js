import Image from "next/image";

const Main = () => {
  return (
    <div className="">
      <div className="relative h-[340px] md:h-[700px] w-screen">
        <Image
          src="/assets/images/p-9/bg.png"
          alt="nabin"
          objectPosition="center"
          layout="fill"
          objectFit="fill"
        />
        <div className="relative w-full h-full text-white flex flex-col justify-center items-center">
          <p className="text-xl font-medium tracking-wider">Food app</p>
          <h2 className="md:text-6xl text-2xl font-bold md:mt-8 mt-4 mb-1 tracking-wide">
            Why stay hungry when
          </h2>
          <h2 className="md:text-6xl text-2xl font-bold md:mb-6 mb-2 tracking-wide">
            you can order form Bella Onojie
          </h2>
          <p className="text-md font-normal my-4 tracking-wider">
            Download the bella onoje’s food app now on
          </p>
          <div className="md:space-x-8 flex flex-col md:flex-row space-y-4 md:space-y-0 ">
            <button className="py-3 tracking-wider hover:shadow border border-white rounded-full px-8 hover:bg-[#FA4A0C]">
              Play store
            </button>
            <button className="py-3 tracking-wider hover:shadow border border-white rounded-full px-8 hover:bg-[#FA4A0C]">
              App store
            </button>
          </div>
        </div>
      </div>
      <div className="md:h-[400px] h-[500px]">
        <div className="relative">
          <div className="absolute md:h-[600px] h-[600px] md:w-[400px] md:left-[33%] left-[0%] md:top-[-200px] w-80">
            <Image
              src="/assets/images/p-9/left-mobile.png"
              alt="nabin"
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div className="absolute md:h-[400px] h-[350px] md:w-[200px] md:left-[47%] left-[50%] md:top-[-60px] top-[125px] w-40">
            <Image
              src="/assets/images/p-9/right-mobile.png"
              alt="nabin"
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="md:w-[50%] w-[80%] border-b-2 border-[#E4E4E4]" />
      </div>
    </div>
  );
};

export default Main;
