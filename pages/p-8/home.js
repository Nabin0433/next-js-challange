import Header from "../../components/p-8/Header";
import Image from "next/image";
import Wobble from "react-reveal/Wobble";
import Bounce from "react-reveal/Bounce";
import Rotate from "react-reveal/Rotate";
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import PlanCard from "../../components/p-8/PlanCard";
import Footer from "../../components/p-8/Footer";

const home = () => {
  return (
    <div>
      <div className="relative text-white md:h-screen h-[120vh] overflow-hidden">
        <div
          className="absolute md:hidden inset-0 z-10 overflow-hidden"
          style={{
            backgroundColor: "#172755",
          }}
        />
        <div
          className="absolute hidden md:block inset-0 z-10 overflow-hidden"
          style={{
            backgroundColor: "#172755",
            clipPath: "polygon(0% 0%, 100% 0, 100% 60%, 0 100%, 0 100%)",
          }}
        />
        <div
          className="absolute hidden md:block z-0 inset-0 bg-red-400"
          style={{
            clipPath: "polygon(0% 0%, 90% 0, 100% 60%, 7% 100%, 0 100%)",
          }}
        />
        <div className="absolute rotate-180 z-10">
          <div className="relative md:h-[500px] md:w-[500px] h-[200px] w-[200px] cursor-pointer">
            <Image
              src="/assets/images/p-8/bg-shadow.svg"
              alt="nabin"
              layout="fill"
              objectPosition="center"
              objectFit="fill"
            />
          </div>
        </div>
        <div className="absolute md:-right-8 -right-4 md:-top-24 top-1/3 z-10">
          <div className="relative md:h-[1000px] md:w-[1000px] h-[300px] w-[300px]  cursor-pointer">
            <Image
              src="/assets/images/p-8/bg-shadow.svg"
              alt="nabin"
              layout="fill"
              objectPosition="center"
              objectFit="fill"
            />
          </div>
        </div>

        <Bounce right duration={1000}>
          <div className="absolute grid rounded-[32px] cursor-pointer -right-20  md:top-1/3 top-[75vh] p-4 md:px-8 md:py-6 bg-white  grid-cols-3 gap-2 z-10 shadow-xl hover:shadow-2xl">
            {Array(8)
              .fill("")
              .map((_, index) =>
                index !== 3 ? (
                  <RubberBand delay={1000} duration={2000}>
                    <div
                      key={index}
                      className="relative md:h-[150px] md:w-[250px] h-[75px] w-[125px] rounded-md shadow-sm hover:shadow-lg transition duration-200"
                    >
                      <Image
                        src={`/assets/images/p-8/chart-${index + 1}.svg`}
                        alt="nabin"
                        layout="fill"
                        objectPosition="center"
                        objectFit="fill"
                      />
                    </div>
                  </RubberBand>
                ) : (
                  <>
                    <div
                      key={index}
                      className="relative md:h-[150px] md:w-[250px] h-[75px] w-[125px] rounded-md"
                    />
                    <RubberBand delay={1000} duration={2000}>
                      <div
                        key={index}
                        className="relative md:h-[150px] md:w-[250px] h-[75px] w-[125px]  rounded-md shadow-sm hover:shadow-lg transition duration-200"
                      >
                        <Image
                          src={`/assets/images/p-8/chart-${index + 1}.svg`}
                          alt="nabin"
                          layout="fill"
                          objectPosition="center"
                          objectFit="fill"
                        />
                      </div>
                    </RubberBand>
                  </>
                )
              )}

            <RubberBand delay={1000} duration={2000}>
              <div className="absolute top-1/4 md:px-10 md:py-8 px-4 py-6 md:-left-16 -left-10 shadow-xl hover:shadow-2xl bg-white rounded-[28px]">
                <div className="relative md:h-[150px] md:w-[250px] w-[130px] h-[60px] rounded-md">
                  <Image
                    src={`/assets/images/p-8/chart.svg`}
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
              </div>
            </RubberBand>
          </div>
        </Bounce>
        <Header />
        <div className="z-10 absolute md:top-1/4 top-24 md:w-1/3 md:left-20 left-8 space-y-8">
          <h2 className="font-bold text-4xl">
            <Flip bottom cascade duration={2000}>
              Monitor your business on real-time dashboard
            </Flip>
          </h2>
          <p className="text-base" style={{ color: "#8794BA" }}>
            <Flip bottom cascade duration={2000}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam.
            </Flip>
          </p>
          <button className="py-4 px-20 text-white bg-pink-600 rounded-full hover:bg-pink-700 active:scale-95 transition duration-200">
            <Zoom bottom cascade duration={2000}>
              Try for free
            </Zoom>
          </button>
        </div>
      </div>
      {/* font-page-end */}
      {/* section */}
      <div className="md:px-20 px-8 md:mt-20 mt-8">
        <div className=" flex flex-col items-center">
          <Zoom bottom cascade duration={1300}>
            <div className="md:space-y-8 space-y-4 md:w-1/2">
              <h2 className="font-bold text-4xl text-center">Main Features</h2>
              <p className="text-gray-400 text-center text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum nisi aliquet volutpat pellentesque volutpat est.
                Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam
                malesuada.
              </p>
            </div>
          </Zoom>
          {/* icon div */}
          <div className="md:flex items-center justify-center md:space-x-4 mt-20 space-y-16 md:space-y-0">
            {/* ICONS DIVS */}
            {/* 1 */}
            <Bounce duration={3000} left>
              <div className="space-y-5 flex flex-col items-center">
                <div className="relative md:h-[60px] md:w-[60px] w-[80px] h-[80px]">
                  <Image
                    src={`/assets/images/p-8/icon-1.svg`}
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <h2 className="font-semibold text-xl">Monitoring 24/7</h2>
                <p className="text-gray-400 w-3/4 text-center  text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Elementum nisi aliquet volutpat.
                </p>
              </div>
            </Bounce>
            {/* 2 */}
            <Bounce duration={3000} top>
              <div className="space-y-5 flex flex-col items-center">
                <div className="relative md:h-[60px] md:w-[60px] w-[80px] h-[80px]">
                  <Image
                    src={`/assets/images/p-8/icon-2.svg`}
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <h2 className="font-semibold text-xl">Widget System</h2>
                <p className="text-gray-400 w-3/4 text-center  text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Elementum nisi aliquet volutpat.
                </p>
              </div>
            </Bounce>
            <Bounce duration={3000} right>
              <div className="space-y-5 flex flex-col items-center">
                <div className="relative md:h-[60px] md:w-[60px] w-[80px] h-[80px]">
                  <Image
                    src={`/assets/images/p-8/icon-3.svg`}
                    alt="nabin"
                    layout="fill"
                    objectPosition="center"
                    objectFit="fill"
                  />
                </div>
                <h2 className="font-semibold text-xl">Best Performance</h2>
                <p className="text-gray-400 w-3/4 text-center  text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Elementum nisi aliquet volutpat.
                </p>
              </div>
            </Bounce>
            {/* 3 */}
          </div>
          {/*  3 section */}
          <div className="md:mt-32 mt-16" />
          {/* section -1 */}
          <Rotate duration={2000} delay={200} top left>
            <div className="flex flex-col-reverse md:flex-row md:justify-between item-center py-12">
              <div className="md:w-1/3 flex flex-col justify-center space-y-3 mt-8 md:mt-0">
                <h2 className="font-semibold md:text-4xl text-xl">
                  Automated Reports & Widget Alerts
                </h2>
                <p className="text-sm md:text-base font-normal text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum nisi aliquet volutpat pellentesque volutpat est.
                  Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                  Vitae et, tortor pulvinar risus pulvinar sit amet.
                </p>
              </div>
              <div className="relative shadow-lg rounded-3xl hover:shadow-2xl h-[300px] md:w-1/3 w-full">
                <Image
                  src={`/assets/images/p-8/chart-1.svg`}
                  alt="nabin"
                  layout="fill"
                  objectPosition="center"
                  objectFit="fill"
                />
              </div>
            </div>
          </Rotate>

          {/* section - 2 */}
          <Rotate duration={2000} delay={200} top right>
            <div className="md:flex md:justify-between item-center py-12">
              <div className="relative shadow-lg rounded-3xl hover:shadow-2xl h-[300px] md:w-1/3 w-full">
                <Image
                  src={`/assets/images/p-8/chart-2.svg`}
                  alt="nabin"
                  layout="fill"
                  objectPosition="center"
                  objectFit="fill"
                />
              </div>
              <div className="md:w-1/3 flex flex-col justify-center space-y-3 mt-8 md:mt-0">
                <h2 className="font-semibold md:text-4xl text-xl">
                  Fully customizable to address your needs
                </h2>
                <p className="text-sm md:text-base font-normal text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum nisi aliquet volutpat pellentesque volutpat est.
                  Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                  Vitae et, tortor pulvinar risus pulvinar sit amet.
                </p>
              </div>
            </div>
          </Rotate>

          {/* section - 3 */}
          <Rotate duration={2000} delay={200} top left>
            <div className="flex flex-col-reverse md:flex-row md:justify-between item-center py-12">
              <div className="md:w-1/3 flex flex-col justify-center space-y-3 mt-8 md:mt-0">
                <h2 className="font-semibold md:text-4xl text-xl">
                  Pre-built Dashboard Templates
                </h2>
                <p className="text-sm md:text-base font-normal text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum nisi aliquet volutpat pellentesque volutpat est.
                  Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                  Vitae et, tortor pulvinar risus pulvinar sit amet.
                </p>
              </div>
              <div className="relative shadow-lg rounded-3xl hover:shadow-2xl h-[300px] md:w-1/3 w-full">
                <Image
                  src={`/assets/images/p-8/chart-5.svg`}
                  alt="nabin"
                  layout="fill"
                  objectPosition="center"
                  objectFit="fill"
                />
              </div>
            </div>
          </Rotate>

          {/* section - 4 */}
          <Rotate duration={2000} delay={200} top right>
            <div className="md:flex md:justify-between item-center py-12">
              <div className="relative shadow-lg rounded-3xl hover:shadow-2xl h-[300px] md:w-1/3 w-full]">
                <Image
                  src={`/assets/images/p-8/chart-4.svg`}
                  alt="nabin"
                  layout="fill"
                  objectPosition="center"
                  objectFit="fill"
                />
              </div>
              <div className="md:w-1/3 flex flex-col justify-center space-y-3 mt-8 md:mt-0">
                <h2 className="font-semibold md:text-4xl text-xl">
                  Everyware And Anyware In Worl'd
                </h2>
                <p className="text-sm md:text-base font-normal text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum nisi aliquet volutpat pellentesque volutpat est.
                  Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                  Vitae et, tortor pulvinar risus pulvinar sit amet.
                </p>
              </div>
            </div>
          </Rotate>

          {/* end section */}
        </div>
      </div>
      {/* pricing plan with footer */}
      <div className="relative text-white md:h-screen h-[120vh] overflow-hidden">
        <div
          className="absolute md:hidden inset-0 z-10 overflow-hidden"
          style={{
            backgroundColor: "#172755",
          }}
        />
        <div
          className="absolute hidden md:block z-0 inset-0 bg-red-400"
          style={{
            clipPath:
              "polygon(0 8%, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 8%)",
          }}
        />
        <div
          className="absolute hidden md:block inset-0 z-10 overflow-hidden"
          style={{
            backgroundColor: "#172755",
            clipPath:
              "polygon(0 12%, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 22%)",
          }}
        />
        <div className="absolute md:-right-8 -right-4 md:-top-24 top-1/3 z-10">
          <div className="relative md:h-[1000px] md:w-[1000px] h-[300px] w-[300px]  cursor-pointer">
            <Image
              src="/assets/images/p-8/bg-shadow.svg"
              alt="nabin"
              layout="fill"
              objectPosition="center"
              objectFit="fill"
            />
          </div>
        </div>
        <div className="absolute top-40 left-1/3 w-[30vw] z-20 flex flex-col justify-center space-y-8">
          <h2 className="text-center font-bold text-2xl">Pricing Plans</h2>
          <p className="text-center text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.
          </p>
        </div>
        <div className="absolute top-[40%] w-full z-20 flex justify-center space-x-8">
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
        <div className="absolute top-[90%] w-full z-20 flex justify-center space-x-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default home;
