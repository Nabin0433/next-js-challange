import Image from "next/image";

const data = [
  {
    img: "/assets/images/p-13/i-1.png",
    title: "Practice",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/assets/images/p-13/i-2.png",
    title: "Lern",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/assets/images/p-13/i-3.png",
    title: "Grow",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const CardWithWapper = () => {
  return (
    <div className="md:flex items-center justify-center md:space-x-8">
      {data?.map((item, i) => (
        <div
          key={i}
          className="px-8 py-16 flex flex-col items-center shadow-lg hover:shadow-xl cursor-pointer space-y-8 rounded-xl"
        >
          <div className="relative h-20 w-20">
            <Image
              src={item.img}
              alt="logo"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <p className="font-bold text-lg">{item.title}</p>
          <p className="text-[#9B9191] font-normal text-base w-60 text-center">
            {item.info}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardWithWapper;
