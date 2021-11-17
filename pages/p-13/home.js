import Header from "../../components/p-13/Header";
import Image from "next/image";
import { GrMail } from "react-icons/gr";
import { MdDone } from "react-icons/md";
import CardWithWapper from "../../components/p-13/CardWithWapper";
import Footer from "../../components/p-13/Footer";

const home = () => {
  return (
    <div>
      <div className="h-[90vh]">
        <div className="absolute left-0 top-0 w-40 h-80">
          <Image
            src={"/assets/images/p-13/top-1.png"}
            alt="logo"
            layout="fill"
            objectFit="fill"
            objectPosition="center"
          />
        </div>
        <div className="absolute right-0 top-0 md:w-[790px] w-full md:h-[750px] h-[400px]">
          <Image
            src={"/assets/images/p-13/left.png"}
            alt="logo"
            layout="fill"
            objectFit="fill"
            objectPosition="center"
          />
        </div>
        <div className="absolute md:left-20 left-8 md:top-1/3 top-1/2 md:w-[400px] w-[300px]">
          <h2 className="font-bold md:text-4xl text-xl">
            Your roadmap to product management
          </h2>
          <p className=" font-normal text-md my-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="relative">
            <div className="absolute left-6 text-[#9B9191] h-10 flex items-center justify-center">
              <GrMail size={20} />
            </div>
            <input
              className="border rounded-2xl h-10 w-full shadow-md outline-none pl-14"
              placeholder="Your email address"
              type="text"
              name=""
              id=""
            />
            <button className="absolute top-0 right-0 text-sm rounded-3xl text-white bg-[#40B094] hover:bg-[#20b38e] p-3 active:scale-95">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="md:px-20 px-8">
          <Header />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-[#40B094] font-bold text-lg">WHAT WE DO?</h2>
        <h3 className="my-4 text-xl font-bold">Our Offer</h3>
        <p className="text-[#9B9191] font-normal text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="md:h-40 h-4"></div>
      <CardWithWapper />
      <div className="flex md:flex-row flex-col md:space-x-8 items-center space-y-16 md:space-y-0">
        <div className="relative md:w-[790px] w-full md:h-[900px] h-[400px]">
          <Image
            src={"/assets/images/p-13/btm.png"}
            alt="logo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:w-1/2 ">
          <h2 className="text-[#40B094] font-bold text-lg">
            WHY OUR PROGRAM ?
          </h2>
          <h3 className="my-4 text-xl font-bold">BENEFITS</h3>
          <div className="space-y-12 flex flex-col items-center w-full">
            {[1, 2, 3].map((i, index) => (
              <div
                key={index}
                className="flex md:space-x-6 space-x-3 py-4 px-6 md:w-1/2 w-[95vw] rounded-md hover:shadow-xl cursor-pointer"
                style={{
                  background: "#FEFEFE",
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="bg-green-500 md:w-28 w-32 h-16 md:min-h-20 text-white flex justify-center items-center rounded-full">
                  <MdDone size={20} />
                </div>
                <p className="text[#2D2727] font-normal text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default home;
