import Image from "next/image";

const Card = () => {
  return (
    <div>
      <div className="relative w-screen md:h-[600px] h-[400px] bg-[#252B42]">
        <Image
          className=" opacity-0 md:opacity-100"
          src="/assets/images/p-9/footer-bg.png"
          alt="nabin"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
        <div className="relative text-white flex items-center flex-col justify-center w-full h-full text-center">
          <p className="font-semibold text-3xl">Download the app now.</p>
          <p className="py-8 md:text-lg tracking-wider">
            Available on your favorite store. Start your premium experience now
          </p>
          <div className="space-x-8 flex mt-8">
            <button className="py-3 tracking-wider hover:shadow border border-white rounded-xl px-6 hover:bg-[#FA4A0C]">
              Buy now
            </button>
            <button className="py-3 tracking-wider hover:shadow border border-white rounded-xl px-6 hover:bg-[#FA4A0C]">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
