import Header from "../../components/p-14/Header";
import Image from "next/image";
import Card from "../../components/p-14/Card";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";
import Footer from "../../components/p-14/Footer";

const home = () => {
  return (
    <div>
      <div className="px-20 py-8">
        {/* header */}
        <Header />
        {/* 1st home screen  */}
        <div className="my-8">
          <div className="relative w-full h-[700px] rounded-sm">
            <Image
              className="rounded-sm"
              src="/assets/images/p-14/bg.png"
              alt="nabin"
              layout="fill"
              objectPosition="center"
              objectFit="cover"
            />
            <div className="absolute left-[10%] top-1/3 w-1/3 text-white space-y-6">
              <h2 className="lg:text-5xl md:text-4xl text-xl font-bold">
                Renting cars have never been this easy
              </h2>
              <p className="text-sm md:text-lg font-semibold">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="absolute inset-0 -bottom-20 flex justify-center items-end">
              <div
                className="w-[80%] bg-white rounded-full px-16 py-8 flex justify-between items-center"
                style={{
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: "100px",
                }}
              >
                <div className="flex space-x-8 items-center">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg tracking-wider">
                      Pick up location
                    </h3>
                    <select
                      className="h-12 w-20 md:w-44 rounded px-3 border border-[#BBC8D4] mb-4 text-gray-500 outline-none"
                      name=""
                      id=""
                    >
                      <option value="">a</option>
                      <option value="">b</option>
                      <option value="">c</option>
                      <option value="">d</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg tracking-wider">
                      Pick up date
                    </h3>
                    <select
                      className="h-12 w-28 md:w-44 rounded px-3 border border-[#BBC8D4] mb-4 text-gray-500 outline-none"
                      name=""
                      id=""
                    >
                      <option value="">a</option>
                      <option value="">b</option>
                      <option value="">c</option>
                      <option value="">d</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg tracking-wider">
                      Return date
                    </h3>
                    <select
                      className="h-12 w-28 md:w-44 rounded px-3 border border-[#BBC8D4] mb-4 text-gray-500 outline-none"
                      name=""
                      id=""
                    >
                      <option value="">a</option>
                      <option value="">b</option>
                      <option value="">c</option>
                      <option value="">d</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button className="bg-[#1F4590] hover:bg-[#072c75] text-white active:scale-95 px-6 py-5 rounded-md">
                    Search for Cars
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd div screen */}
        <div className="flex items-center justify-between mt-40">
          {Array(5)
            .fill("_")
            .map((_, index) => (
              <div
                key={index}
                className="relative h-20 w-48 cursor-pointer hover:scale-105 duration-200 transition"
              >
                <Image
                  className="rounded-sm"
                  src={`/assets/images/p-14/l-${index + 1}.png`}
                  alt="nabin"
                  layout="fill"
                  objectPosition="center"
                  objectFit="contain"
                />
              </div>
            ))}
        </div>
        {/* 3rd screen  */}
        <div className="flex flex-col items-center justify-between my-20 space-y-8">
          <h2 className="font-bold md:text-4xl text-xl">Our Featured Cars</h2>
          <div className="flex flex-row w-full justify-end space-x-8">
            <button className="p-4 bg-[#1F4590] rounded-full text-white active:scale-95 hover:shadow-md duration-200 transition">
              <RiArrowLeftSLine size={35} />
            </button>
            <button className="p-4 bg-[#1F4590] rounded-full text-white active:scale-95">
              <RiArrowRightSLine size={35} />
            </button>
          </div>
          <div className="flex items-center space-x-8">
            <Card item={1} />
            <Card item={2} />
            <Card item={3} />
          </div>
        </div>
        {/* 4th screen */}
        <div className="mt-32 mb-16 flex flex-col items-center space-y-12">
          <h2 className="font-extrabold text-xl md:text-2xl lg:text-6xl">
            Why We Are Different
          </h2>
          <p className="font-medium text-gray-600 text-lg w-1/3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          {/* card wapper */}
          <div className="flex justify-center items-center space-x-16">
            {IconCard(1)}
            {IconCard(2)}
            {IconCard(3)}
          </div>
        </div>
        {/* 5th screen */}
        <div className="bg-[#FAFAFA] flex flex-col justify-center items-center mt-20 py-20">
          <h2 className="font-bold md:text-6xl text-2xl">
            What do people say about us?
          </h2>
          <p className="font-semibold text-lg text-gray-500 w-1/3 mt-6 text-center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          {/* div box containt */}
          <div className="flex justify-between items-center mt-16 mb-8">
            <div className="relative w-[600px] h-[600px] cursor:pointer">
              <Image
                className="rounded-sm transition duration-200 hover:scale-95"
                src="/assets/images/p-14/g-1.png"
                alt="nabin"
                layout="fill"
                objectPosition="center"
                objectFit="contain"
              />
            </div>
            <div className="bg-[#1F4590] rounded transition duration-200 hover:scale-95 cursor:pointer flex flex-col text-white justify-center px-20 w-[600px] h-[600px]">
              <p className="text-lg leading-loose">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.“
              </p>
              <hr className="w-1/4 mt-4 mb-2" />
              <p className="font-semibold text-xl">Nabin Karki,</p>
              <p className="font-semibold text-xl">CEO at Reality</p>
            </div>
          </div>
        </div>
        {/* 6th screen */}
        <div className="bg-[#FAFAFA] flex flex-col justify-center items-center mt-20 py-28">
          <h2 className="font-bold md:text-6xl text-2xl mb-20">
            Read Our Stories
          </h2>
          {/* card wapper */}
          <div className="flex justify-center items-center space-x-6">
            {/* card */}
            {StoryCard(4)}
            {StoryCard(5)}
            {StoryCard(6)}
          </div>
        </div>
        {/* 7th screen */}
        <div className="bg-[#1F4590] mt-16 py-20 rounded flex flex-col justify-center items-center">
          <h2 className="font-bold text-white md:text-6xl text-2xl mb-14">
            Find Your Next Long Drive Now!
          </h2>
          <div
            className="w-[80%] bg-white rounded-full px-16 py-6 flex justify-between items-center"
            style={{
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.08)",
              borderRadius: "100px",
            }}
          >
            <div className="flex space-x-8 items-center">
              <div className="space-y-2">
                <h3 className="font-bold text-lg tracking-wider">
                  Pick up location
                </h3>
                <select
                  className="h-12 w-20 md:w-44 rounded px-3 border border-[#BBC8D4] mb-4 text-gray-500 outline-none"
                  name=""
                  id=""
                >
                  <option value="" hidden>
                    Select Location
                  </option>
                  <option value="">b</option>
                  <option value="">c</option>
                  <option value="">d</option>
                </select>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg tracking-wider">
                  Pick up date
                </h3>
                <select
                  className="h-12 w-28 md:w-44 rounded px-3 border border-[#BBC8D4] mb-4 text-gray-500 outline-none"
                  name=""
                  id=""
                >
                  <option value="" hidden>
                    Select Location
                  </option>
                  <option value="">b</option>
                  <option value="">c</option>
                  <option value="">d</option>
                </select>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg tracking-wider">
                  Return date
                </h3>
                <select
                  className="h-12 w-28 md:w-44 rounded px-3 border border-[#BBC8D4] mb-4 text-gray-500 outline-none"
                  name=""
                  id=""
                >
                  <option value="" hidden>
                    Select Location
                  </option>
                  <option value="">b</option>
                  <option value="">c</option>
                  <option value="">d</option>
                </select>
              </div>
            </div>
            <div>
              <button className="bg-[#1F4590] hover:bg-[#072c75] text-white active:scale-95 px-6 py-5 rounded-md">
                Search for Cars
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-20" />
      <Footer />
    </div>
  );
};

export default home;

const IconCard = (index) => (
  <div
    className="flex flex-col items-center px-6 py-20 rounded-2xl space-y-8"
    style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
  >
    <div className="relative w-[100px] h-[100px] bg-white">
      <Image
        className="rounded-sm"
        src={`/assets/images/p-14/i-${index}.png`}
        alt="nabin"
        layout="fill"
        objectPosition="center"
        objectFit="contain"
      />
    </div>
    <h2 className="font-normal text-xl">Easy Booking</h2>
    <p className="font-normal text-base w-2/3 text-center">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.
    </p>
  </div>
);

const StoryCard = (item) => (
  <div className="w-[400px] bg-white rounded-3xl cursor-pointer hover:scale-105 transition duration-300">
    <div className="relative w-full h-[250px] -mt-3">
      <Image
        className="rounded-sm transition duration-200"
        src={`/assets/images/p-14/c-${item}.png`}
        alt="nabin"
        layout="fill"
        objectPosition="center"
        objectFit="cover"
      />
    </div>
    <div className="px-4">
      <div className="inline-flex px-4 py-2 justify-center items-center rounded-full text-white bg-[#1F4590]">
        <p>Tags</p>
      </div>
      <h2 className="font-bold text-xl my-4">
        Starting your traveling blog with Vasco
      </h2>
      <p className="text-lg text-gray-500">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
      <div className="flex items-center space-x-2 font-semibold my-8">
        <p>Find Out More</p>
        <BiRightArrowAlt size={22} />
      </div>
    </div>
  </div>
);
