import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const WorkCard = ({ work }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/work/" + work.id)}
      className="border-b-2 border-gray-200 md:flex  md:space-x-16 hover:shadow-2xl p-2 px-6 pb-8 mx-3 md:mx-0"
    >
      <div className="relative w-full h-[200px] md:h-auto md:w-[300px] lg:w-[600px] cursor-pointer mb-8 md:mb-0">
        <Image
          className="rounded-xl"
          src={work.img}
          alt={work.heading}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div>
        <h2 className="font-bold text-xl">{work.heading}</h2>
        <div className="flex items-center space-x-4 my-4 font-normal text-lg">
          <p className="bg-black py-1 px-2 text-white font-black text-lg rounded-3xl">
            {work.date}
          </p>
          <p className="border-r-2 border-black h-4 " />
          <p className="text-gray-400">{work.title}</p>
        </div>
        <p className="text-base">{work.about}</p>
      </div>
    </div>
  );
};

export default WorkCard;
