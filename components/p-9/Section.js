import Image from "next/image";

const Section = ({ data }) => {
  return (
    <div
      className={`md:px-80 pt-2 flex flex-col ${
        data.isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } justify-between items-center`}
    >
      <div className="relative md:h-[600px] md:w-[400px] w-[80%] h-[450px] left-[8%] md:left-0">
        <Image
          src={data.img}
          alt="nabin"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div
        className={`md:w-[45%] w-[80%] text-center md:text-left ${
          data.isLeft ? "md:pr-8" : "md:pl-20"
        }`}
      >
        <p className="text-[#FA4A0C]">{data.title}</p>
        <h3 className="text-3xl font-semibold my-4">{data.heading}</h3>
        <p className="text-gray-400">{data.info}</p>
      </div>
    </div>
  );
};

export default Section;
