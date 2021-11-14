import { ButtonOutline } from "./Buttons";

const Nav = () => {
  return (
    <nav className="md:flex hidden justify-between items-center pt-6">
      <div>
        <h2 className="font-bold text-2xl">Reality Travel</h2>
      </div>
      <div className=" font-medium text-xl md:space-x-8 space-y-4 md:space-y-0 grid grid-cols-2 md:grid-cols-5 justify-between items-center">
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
