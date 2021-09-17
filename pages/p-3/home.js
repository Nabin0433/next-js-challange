import Head from "next/head";
import Header from "../../components/p-3/Header";
import Image from "next/image";
import { useState } from "react";
const home = () => {
  const [active, setActive] = useState(0);

  const items = [
    {
      price: "32",
      name: "Green Goddess Chicken Salad",
      description:
        "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. ",
      bg: "bg-yellow-400",
      hover: "bg-yellow-500",
      color: "text-yellow-400",
      food: "/assets/images/p-3/food-1.png",
      mark: "/assets/images/p-3/mark.png",
    },
    {
      price: "35",
      name: "Asian Cucumber Salad",
      description:
        "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients! ",
      bg: "bg-green-400",
      hover: "bg-green-700",
      color: "text-green-400",
      food: "/assets/images/p-3/food-2.png",
      mark: "/assets/images/p-3/mark-2.png",
    },
    {
      price: "30",
      name: "Green Goddess Chicken Salad",
      description:
        "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. ",
      bg: "bg-yellow-400",
      hover: "bg-yellow-500",
      color: "text-yellow-400",
      food: "/assets/images/p-3/food-3.png",
      mark: "/assets/images/p-3/mark.png",
    },
  ];
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      {/* style */}
      <div
        className="absolute hidden md:block overflow-hidden z-0"
        style={{ top: "-1400px", right: "-600px" }}
      >
        <div className="relative h-[2000px] w-[2000px] ">
          <Image
            className="rounded-full shadow"
            src={items[active].mark}
            alt={"Trafalgar"}
            objectPosition="center"
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div
          className="absolute"
          style={{
            top: "752px",
            right: "430px",
            transform: "rotate(8.5deg)",
          }}
        >
          <div className="relative h-[1600px] w-[1600px]">
            <Image
              className="rounded-full"
              src={"/assets/images/p-3/foods.svg"}
              alt={"foods"}
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
      <div className="absolute hidden md:flex justify-between items-center right-20 md:w-1/2 bottom-48">
        <span
          className={`flex justify-center items-center ${items[active].bg} hover:${items[active].hover} active:scale-95 rounded-full focus:outline-none w-14 h-14 cursor-pointer`}
        >
          <div className="relative h-5 w-5">
            <Image
              className=" rounded-full"
              src={"/assets/images/p-3/down.svg"}
              alt={"Trafalgar"}
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </span>
        <span
          className={`flex justify-center items-center ${items[active].bg} hover:${items[active].hover} active:scale-95 rounded-full focus:outline-none w-14 h-14 cursor-pointer`}
        >
          <div className="relative h-5 w-5">
            <Image
              className=" rounded-full"
              src={"/assets/images/p-3/down.svg"}
              alt={"Trafalgar"}
              objectPosition="center"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </span>
      </div>
      {/* end */}
      <main>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:mt-80 md:px-28 px-8 ">
          <div className="md:w-2/6 space-y-4">
            <p className={`font-black text-6xl ${items[active].color}`}>
              ${items[active].price}
            </p>
            <h2 className="font-bold text-4xl">{items[active].name}</h2>
            <p className="font-normal text-base">{items[active].description}</p>
            <p />
            <button
              className={`py-4 px-10 ${items[active].bg} rounded-full text-white  hover:${items[active].hover} shadow hover:shadow-2xl active:scale-95 z-30`}
            >
              ORDER NOW
            </button>
          </div>
          <div className="md:w-4/6 md:pl-40 my-12 md:my-0">
            <div className="flex justify-center">
              <div className="relative h-80 w-80">
                <Image
                  className="rounded-full"
                  src={items[active].food}
                  alt={"Trafalgar"}
                  objectPosition="center"
                  layout="fill"
                  objectFit="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-20 mt-32">
          {Array(3)
            .fill("_")
            .map((_, index) => (
              <span
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 w-3 cursor-pointer rounded-full hover:bg-yellow-500 ${
                  active === index ? "bg-yellow-400" : "bg-gray-400"
                }`}
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default home;
