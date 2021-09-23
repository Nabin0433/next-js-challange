import Header from "../../components/p-6/Header";
import Image from "next/image";

const home = () => {
  return (
    <div>
      <Header />
      {/* style */}
      <div className="absolute left-0 right-0 flex items-center justify-between z-30 text-white md:px-20 top-60">
        <div className="w-1/4"></div>
        <div className="space-y-8">
          <p className="font-semibold text-lg tracking-wider">
            ----- A Hiking guide
          </p>
          <h2 className="font-bold text-8xl tracking-wide">
            Be prepared for the Mountains and beyond!
          </h2>
        </div>
        <div className="w-1/4"></div>
      </div>
      {/* text-end */}
      <div className="relative w-full h-1/2">
        <Image
          src="/assets/images/p-6/topblur.png"
          alt="blur"
          layout="fill"
          objectPosition="center"
          objectFit="fill"
        />
        <div className="relative w-full h-[900px] top-[600px]">
          <Image
            src="/assets/images/p-6/MG.png"
            alt="blur"
            layout="fill"
            objectPosition="center"
            objectFit="fill"
          />
        </div>
        <div className="relative w-full h-[700px]">
          <Image
            src="/assets/images/p-6/bg.png"
            alt="blur"
            layout="fill"
            objectPosition="center"
            objectFit="fill"
          />
        </div>
        <div className="absolute w-full h-[800px] bottom-0">
          <Image
            src="/assets/images/p-6/bottomblur.png"
            alt="blur"
            layout="fill"
            objectPosition="center"
            objectFit="fill"
          />
        </div>
      </div>
      {/* end */}
      <main className="p-20" style={{ backgroundColor: "#111517" }}>
        <div className=" space-y-8">
          <div className="flex items-center w-full justify-between">
            <div className="text-white space-y-8 w-2/4">
              <p className="text-yellow-500 tracking-widest">
                ---- GEt Started
              </p>
              <h2 className="text-4xl font-semibold tracking-wide">
                What level of hiker are you?
              </h2>
              <p className="font-light text-gray-200 tracking-wide">
                Determining what level of hiker you are can be an important tool
                when planning future hikes. This hiking level guide will help
                you plan hikes according to different hike ratings set by
                various websites like All Trails and Modern Hiker. What type of
                hiker are you – novice, moderate, advanced moderate, expert, or
                expert backpacker?
              </p>
              <p className="text-yellow-500 hover:text-yellow-600 cursor-pointer">
                read more
              </p>
            </div>
            <div className="relative w-[400px] h-[400px]">
              <Image
                src="/assets/images/p-6/1.png"
                alt="blur"
                layout="fill"
                objectPosition="center"
                objectFit="fill"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="flex items-center w-full justify-between">
            <div className="relative w-[400px] h-[400px]">
              <Image
                src="/assets/images/p-6/2.png"
                alt="blur"
                layout="fill"
                objectPosition="center"
                objectFit="fill"
              />
            </div>
            <div className="text-white space-y-8 w-2/4">
              <p className="text-yellow-500 tracking-widest">
                ---- Hiking Essentials
              </p>
              <h2 className="text-4xl font-semibold tracking-wide">
                Picking the right Hiking Gear!
              </h2>
              <p className="font-light text-gray-200 tracking-wide">
                The nice thing about beginning hiking is that you don’t really
                need any special gear, you can probably get away with things you
                already have. Let’s start with clothing. A typical mistake
                hiking beginners make is wearing jeans and regular clothes,
                which will get heavy and chafe wif they get sweaty or wet.
              </p>
              <p className="text-yellow-500 hover:text-yellow-600 cursor-pointer">
                read more
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex items-center w-full justify-between">
            <div className="text-white space-y-6 w-2/4">
              <p className="text-yellow-500 tracking-widest">
                ---- where you go is the key
              </p>
              <h2 className="text-4xl font-semibold tracking-wide">
                Understand Your Map & Timing
              </h2>
              <p className="font-light text-gray-200 tracking-wide">
                To start, print out the hiking guide and map. If it’s raining,
                throw them in a Zip-Lock bag. Read over the guide, study the
                map, and have a good idea of what to expect. I like to know what
                my next landmark is as I hike. For example, I’ll read the guide
                and know that say, in a mile, I make a right turn at the
                junction..
              </p>
              <p className="text-yellow-500 hover:text-yellow-600 cursor-pointer">
                read more
              </p>
            </div>
            <div className="relative w-[400px] h-[400px]">
              <Image
                src="/assets/images/p-6/3.png"
                alt="blur"
                layout="fill"
                objectPosition="center"
                objectFit="fill"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default home;
