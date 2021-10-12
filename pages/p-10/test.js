import Image from "next/image";
import { useEffect, useState } from "react";
const test = () => {
  const [bg, setBg] = useState("opacity-0");
  const [logoOpacity, setLogoOpacity] = useState("opacity-10");
  const handleScroll = (e) => {
    const h = document.documentElement.scrollHeight - 800;
    const currenth = window.scrollY;
    if (currenth < 1000) {
      setBg("opacity-0");
      setLogoOpacity("opacity-30");
    } else if (h / 2 < currenth) {
      setLogoOpacity("opacity-90");
      setBg("opacity-60");
    } else {
      setLogoOpacity("opacity-60");
      setBg("opacity-20");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="">
      <div>
        <div className="fixed w-screen h-screen bg-black wapper">
          <div
            className={`fixed w-full h-full flex justify-center item-center z-10 ${logoOpacity}`}
          >
            <Image
              className="img"
              src="/assets/images/p-10/logo.png"
              alt=""
              layout="fill"
              objectPosition="center"
              objectFit="fill"
            />
          </div>
          <div className="fixed w-full h-full bottom-0 flex justify-center">
            <Image
              className="img"
              src="/assets/images/p-10/3-a.svg"
              alt=""
              layout="fill"
              objectPosition="center"
              objectFit="fill"
            />
          </div>
          <div
            className={`fixed w-full h-full flex justify-center item-center ${bg}`}
          >
            <Image
              className="img"
              src="/assets/images/p-10/2-a.svg"
              alt=""
              layout="fill"
              objectPosition="center"
              objectFit="fill"
            />
          </div>
          <div className="mdiv">
            {Array(35)
              .fill("_")
              .map((_, index) => (
                <div key={index} className="div" />
              ))}
          </div>
        </div>
      </div>
      <div className="absolute w-screen h-[6000px] bg-transparent text-white z-50">
        jwdhc,mslnafjkwdhjckn,mdsncn,m
      </div>
    </div>
  );
};

export default test;
