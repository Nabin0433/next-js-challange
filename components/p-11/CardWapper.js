import Card from "./Card";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useState } from "react";

const CardWapper = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  return (
    <div className="relative">
      <button
        className="absolute rounded-full h-16 w-16 bg-gray-900 -bottom-8 left-1/2 flex justify-center items-center text-white hover:bg-gray-700"
        onClick={toggle}
      >
        {!active ? <HiChevronDown size={30} /> : <HiChevronUp size={30} />}
      </button>
      <h2 className="text-center font-bold text-3xl">Entire city of choice</h2>
      <div
        className="rounded-2xl space-x-20 flex justify-center py-16"
        style={{
          background: "linear-gradient(0deg, #E1F0F4 50%, #fff 50%)",
        }}
      >
        <Card
          item={{
            img: "/assets/images/p-11/r-1.png",
            price: "$600.00",
            Bid: "Booking ID: 9837432",
            place: "Turky resort",
          }}
        />
        <Card
          item={{
            img: "/assets/images/p-11/r-2.png",
            price: "$600.00",
            Bid: "Booking ID: 9837432",
            place: "Turky resort",
          }}
        />
        <Card
          item={{
            img: "/assets/images/p-11/r-3.png",
            price: "$600.00",
            Bid: "Booking ID: 9837432",
            place: "Turky resort",
          }}
        />
      </div>
      {active && (
        <div
          className="rounded-2xl space-x-20 flex justify-center py-16"
          style={{
            background: "linear-gradient(0deg, #E1F0F4 50%, #fff 50%)",
          }}
        >
          <Card
            item={{
              img: "/assets/images/p-11/r-5.png",
              price: "$600.00",
              Bid: "Booking ID: 9837432",
              place: "Turky resort",
            }}
          />
          <Card
            item={{
              img: "/assets/images/p-11/r-6.png",
              price: "$600.00",
              Bid: "Booking ID: 9837432",
              place: "Turky resort",
            }}
          />
          <Card
            item={{
              img: "/assets/images/p-11/r-7.png",
              price: "$600.00",
              Bid: "Booking ID: 9837432",
              place: "Turky resort",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CardWapper;
