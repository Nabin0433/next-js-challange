import { useRef } from "react";
import Roll from "react-reveal/Roll";
const ProjectCard = ({ items }) => {
  const ref = useRef(null);
  const scroll = (e) => {
    if (e === "left") {
      ref.current.scrollLeft -= 800;
      console.log(ref.current.scrollLeft);
    }
    if (e === "right") {
      ref.current.scrollLeft += 800;
    }
  };
  return (
    <div id={items.id} className="md:space-y-20 relative  md:px-20 pt-4 px-0">
      <h2 className="text-center font-semibold text-4xl border-b py-6">
        {items.title}
      </h2>
      <div
        ref={ref}
        className="flex overflow-x-scroll transform transition duration-200 overflow-y-hidden md:space-x-14 space-x-8 py-8 md:p-6 shadow-sm rounded-lg px-2"
      >
        {items?.items?.map((i, index) => (
          <Roll key={index} left>
            <div className="min-w-[350px] md:min-w-[400px] cursor-pointer flex-grow h-[300px] md:h-[400px] shadow-2xl  border-gray-600 rounded-2xl hover:shadow-md group  p-8 space-y-6 transition duration-150 ">
              <h2 className="font-semibold md:text-2xl text-lg group-hover:text-gray-500">
                {i.h2}
              </h2>
              <p className="text-xs md:text-base font-normal group-hover:text-gray-400">
                {i.p}
              </p>
              <p className="text-sm md:text-base group-hover:text-gray-500">
                <a href={i.link}>Learn More {">"}</a>
              </p>
            </div>
          </Roll>
        ))}
      </div>
      <div className="absolute md:left-14 left-4 top-[40%] hidden md:block">
        <button
          className=" w-14 h-14 cursor-pointer bg-white shadow-md hover:text-gray-400 text-gray-600 hover:shadow-md active:scale-95 transform transition duration-150 rounded-full flex justify-center items-center"
          onClick={() => scroll("left")}
        >
          {"<"}
        </button>
      </div>
      <div className="absolute md:right-14 right-4 top-[40%] hidden md:block">
        <button
          className=" w-14 h-14 cursor-pointer bg-white shadow-md hover:text-gray-400 text-gray-600 hover:shadow-md active:scale-95 transform transition duration-150 rounded-full flex justify-center items-center"
          onClick={() => scroll("right")}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
