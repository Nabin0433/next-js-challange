import Image from "next/image";

const ItemCard = ({ item }) => {
  return (
    <div className="shadow hover:shadow-2xl cursor-pointer p-8 space-y-4 rounded-2xl bg-white z-20">
      <div className="relative md:w-2/4 h-[150px] mb-14">
        <Image
          className="hover:scale-105 rounded-md transform transition duration-200 cursor-move"
          src={item.img}
          alt={"Trafalgar"}
          objectPosition="center"
          layout="fill"
          objectFit="fill"
        />
      </div>
      <h2 className="font-bold font-2xl">{item.heading}</h2>
      <p className="font-light text-sm" style={{ color: "#7D7987" }}>
        {item.info}
      </p>
    </div>
  );
};

export default ItemCard;
