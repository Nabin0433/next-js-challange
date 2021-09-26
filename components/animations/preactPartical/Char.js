import Particles from "react-tsparticles";

const Char = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0 z-10"
    />
  );
};
const options = {
  autoPlay: true,
  background: {
    color: {
      value: "#0d47a1",
    },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 0,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  fullScreen: {
    enable: false,
    zIndex: 1,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 100,
          smooth: 150,
        },
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          blink: true,
          consent: true,
          opacity: 0.5,
        },
      },
    },
  },
  manualParticles: [],
  motion: {
    disable: true,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  particles: {
    color: {
      value: ["#4a2f10", "#521710", "#0d174d", "#4f5054", "#202021"],
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
      },
    },
    destroy: {
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
      },
    },
    gradient: [],
    groups: {},
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: {
        value: ["#4a2f10", "#521710", "#0d174d", "#4f5054", "#202021"],
      },
      consent: false,
      distance: 100,
      enable: true,
      frequency: 1,
      opacity: 0.2,

      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 0.8,
      warp: false,
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 2,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000",
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 80,
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1,
      },
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 1,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.1,
      },
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 45,
      },
      width: 1,
    },
    reduceDuplicates: false,
    repulse: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: "vertical",
      speed: 25,
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {
        character: {
          value: ["D", "A", "Y", "1", "X"],
          font: "Verdana",
          style: "",
          weight: "800",
          fill: true,
        },
        char: {
          value: ["D", "A", "Y", "1", "X"],
          font: "Verdana",
          style: "",
          weight: "800",
          fill: true,
        },
      },
      type: "char",
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: 16,
      animation: {
        count: 0,
        enable: false,
        speed: 10,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 10,
      },
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      enable: false, //true for 3D
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  themes: [],
  zLayers: 100,
};
export default Char;
