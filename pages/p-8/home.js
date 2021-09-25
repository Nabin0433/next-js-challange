import Particles from "react-tsparticles";
import Connect from "../../components/animations/preactPartical/Connect";
import Parallax from "../../components/animations/preactPartical/Parallax";
import Twinkle from "../../components/animations/preactPartical/twinkle";

const home = () => {
  return (
    <div className="bg-gray-700 h-screen">
      {/* <Twinkle /> */}
      <div className="relative h-[80vh] w-[100vw] z-10 overflow-hidden">
        <Twinkle />
      </div>
    </div>
  );
};

export default home;
