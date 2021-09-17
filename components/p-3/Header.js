import Image from "next/image";
const Header = () => {
  return (
    <header className="py-6 px-28 flex justify-between items-center text-base font-medium ">
      <div className="flex items-center space-x-60">
        <ul className="relative h-12 w-40 cursor-pointer ">
          <Image
            src={"/assets/images/p-3/logo.svg"}
            alt={"Trafalgar"}
            objectPosition="center"
            layout="fill"
            objectFit="fill"
          />
        </ul>
        <div className="flex items-center space-x-32 z-50">
          <ul className=" cursor-pointer hover:text-yellow-400">Breakfast</ul>
          <ul className=" cursor-pointer hover:text-yellow-400">lunch</ul>
          <ul className=" cursor-pointer hover:text-yellow-400">Dinner</ul>
        </div>
      </div>
      <div>
        <ul className="relative h-6 w-6 cursor-pointer z-50">
          <Image
            src={"/assets/images/p-3/bag.svg"}
            alt={"Trafalgar"}
            objectPosition="center"
            layout="fill"
            objectFit="fill"
          />
          <span className="absolute rounded-full h-2 w-2 bg-yellow-500 right-0 bottom-0"></span>
        </ul>
      </div>
    </header>
  );
};

export default Header;
