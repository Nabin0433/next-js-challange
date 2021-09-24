import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 8,
  (x - rect.left - rect.width / 2) / 8,
  1.2,
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const CodeCard = ({ text }) => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const config = {
    mass: 0,
    tension: 0,
    friction: 0,
    clamp: true,
    precision: 0,
    velocity: 0,
    easing: (t) => t,
  };
  const props = useSpring({ xys, config });

  return (
    <div className="w-full h-full" ref={ref}>
      <animated.div
        className="w-full h-full border border-gray-500 rounded-2xl shadow-3xl transition duration-150 transform py-5 px-8"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <div className="">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-3 items-center">
              <span className="w-3 h-3 bg-red-600 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
            </div>
            <button className="px-2 text-sm font-light cursor-pointer border hover:bg-red-400 hover:text-gray-200 border-gray-400 hover:shadow-lg active:scale-95 transform transition duration-150 rounded-xl">
              Return
            </button>
          </div>
          <code className="text-gray-800 space-y-3">
            <li>function getThePrice() public view returns (int) </li>
            <li>function getThePrice() public view returns (int) </li>
            <li>function getThePrice() public view returns (int) </li>
            <li>function getThePrice() public view returns (int) </li>
          </code>
        </div>
      </animated.div>
    </div>
  );
};

export default CodeCard;
