import { useState } from "react";
import Image from "next/image";
import { useSprings, animated, to } from "react-spring";
import { useDrag } from "react-use-gesture";

const cards = [
  {
    img: "/assets/images/p-7/pe-1.jpeg",
    info: "Build on a flexible framework that can retrieve data from any API,connect with existing systems, and integrate with any current or future blockchain.",
    name: "nabin",
    job: "Developer",
  },
  {
    img: "/assets/images/p-7/bg.png",
    info: "Build on a flexible framework that can retrieve data from any API,connect with existing systems, and integrate with any current or future blockchain.",
    name: "nabin",
    job: "Developer",
  },
  {
    img: "/assets/images/p-7/bg.png",
    info: "Build on a flexible framework that can retrieve data from any API,connect with existing systems, and integrate with any current or future blockchain.",
    name: "nabin",
    job: "Developer",
  },
  {
    img: "/assets/images/p-7/bg.png",
    info: "Build on a flexible framework that can retrieve data from any API,connect with existing systems, and integrate with any current or future blockchain.",
    name: "nabin",
    job: "Developer",
  },
  {
    img: "/assets/images/p-7/bg.png",
    info: "Build on a flexible framework that can retrieve data from any API,connect with existing systems, and integrate with any current or future blockchain.",
    name: "nabin",
    job: "Developer",
  },
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const too = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const CardDeck = () => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({
    ...too(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) {
        gone.add(index);
      } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: 0,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length) {
        setTimeout(() => gone.clear() || set((i) => too(i)), 600);
      }
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      style={{
        transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
        position: "absolute",
        width: "100vw",
        height: "100vh",
        willChange: "transform",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: to([rot, scale], trans),
        }}
      >
        <div className="p-8">
          <h2 className="font-bold text-2xl">{cards[i].name}</h2>
          <h2 className="font-semibold text-xl mt-4">{cards[i].job}</h2>
          <div className="relative mt-8 w-full h-[200px] md:h-[30opx] lg:h-[40vh]   pointer-events-none">
            <Image
              src={cards[i].img}
              alt=""
              layout="fill"
              objectPosition="center"
              objectFit="fill"
            />
          </div>
          <p className="font-light text-sm md:text-base mt-12">
            {cards[i].info}
          </p>
        </div>
      </animated.div>
    </animated.div>
  ));
};

export default CardDeck;
