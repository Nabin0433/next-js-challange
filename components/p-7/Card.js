import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = () => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const config = {
    mass: 2,
    tension: 200,
    friction: 26,
    clamp: false,
    precision: 0.05,
    velocity: 0.01,
    easing: (t) => t,
  };
  const props = useSpring({ xys, config });

  return (
    <div
      className="w-full h-full flex justify-center items-center overflow-hidden"
      ref={ref}
    >
      <animated.div
        className="w-40 h-40 bg-black shadow-lg transition duration-150 transform"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      />
    </div>
  );
};

export default Card;
