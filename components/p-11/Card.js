import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className="rounded-2xl shadow-md h-[350px] group hover:shadow-xl cursor-pointer">
      <div className="relative h-2/3 w-[380px] rounded-full">
        <Image
          className="group-hover:scale-90 transition duration-300"
          src={item.img}
          alt=""
          layout="fill"
          objectPosition="center"
          objectFit="fill"
        />
      </div>
      <div className="flex items-center justify-between px-2 mt-4">
        <div>
          <p className="text-[#F21818] font-semibold text-lg">{item.price}</p>
          <p className="text-xl font-bold">{item.Bid}</p>
          <p className="text-gray-400 text-base font-medium">{item.place}</p>
        </div>
        <div className="rounded-full flex justify-center items-center bg-white p-2">
          <div className="relative h-10 w-10 ">
            <Image
              className=""
              src="/assets/images/p-11/lock.png"
              alt=""
              layout="fill"
              objectPosition="center"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
