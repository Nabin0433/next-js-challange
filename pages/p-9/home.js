import { useState } from "react";
import ParticleImage, { Vector, forces } from "react-particle-image";

const home = () => {
  const [scale, setscale] = useState(0.5);
  const [oldScroll, setOldScroll] = useState(0);
  const [maxParticles, setMaxParticles] = useState(3000);

  const particleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => "#fff",
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 30,
    friction: () => 0.09,
    initialPosition: ({ canvasDimensions }) => {
      return new Vector(
        canvasDimensions.width / 2,
        canvasDimensions.height / 2
      );
    },
  };

  const motionForce = (x, y, z = 9) => {
    return forces.disturbance(x, y, z);
  };
  const scroll = (e) => {
    let currentScroll = e.target.scrollTop || document.body.scrollTop; // Get Current Scroll Value
    if (currentScroll > 0 && oldScroll <= currentScroll) {
      // down
      if (scale !== 0.5) {
        setscale(0.5);
      }
      if (maxParticles !== 3000) {
        setMaxParticles(4000);
      }
    } else {
      // up
      if (scale === 0.5) {
        setscale(0.8);
      }
      if (maxParticles === 3000) {
        setMaxParticles(4000);
      }
    }
    setOldScroll(currentScroll);
    return;
  };
  return (
    <div>
      <div className="fixed inset-0 z-10">
        <ParticleImage
          className="w-full h-full"
          src={"/assets/images/me.jpeg"}
          scale={scale}
          entropy={10}
          maxParticles={maxParticles}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          mouseDownForce={motionForce}
          backgroundColor="#191D1F"
        ></ParticleImage>
      </div>
      <div
        className="w-screen absolute h-screen overflow-scroll z-20"
        onScroll={scroll}
      >
        <div className="w-screen h-[800px] z-10 bg-transparent">kjknj,mnl</div>
        <div className="w-screen h-[800px] z-10 bg-transparent">lknklnlk</div>
        <div className="w-screen h-[800px] z-10 bg-transparent">kjkjkj,</div>
        <div className="w-screen h-[800px] z-10 bg-transparent">kjkjkj,</div>
        <div className="w-screen h-[8000px] z-10 bg-transparent">kjkjkj,</div>
      </div>
    </div>
  );
};
export default home;
