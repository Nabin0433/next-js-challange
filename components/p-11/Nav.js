import { ButtonOutline } from "./Buttons";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <div>
        <h2 className="font-bold text-2xl">Reality Travel</h2>
      </div>
      <div className=" font-medium text-xl space-x-8 flex items-center">
        <ol className=" cursor-pointer hover:text-[#0500FF]">Home</ol>
        <ol className=" cursor-pointer hover:text-[#0500FF]">About</ol>
        <ol className=" cursor-pointer hover:text-[#0500FF]">Type of house</ol>
        <ol className=" cursor-pointer hover:text-[#0500FF]">Contact</ol>
        <ButtonOutline text="Login" />
      </div>
    </nav>
  );
};

export default Nav;
