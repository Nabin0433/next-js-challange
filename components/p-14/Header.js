const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="cursor-pointer">
        <h2 className="text-xl">CarVenture</h2>
      </div>
      <div className="space-x-8 font-semibold text-lg flex items-center">
        <ol className="cursor-pointer hover:text-[#1F4590]">Home</ol>
        <ol className="cursor-pointer hover:text-[#1F4590]">Cars</ol>
        <ol className="cursor-pointer hover:text-[#1F4590]">Offers</ol>
        <ol className="cursor-pointer hover:text-[#1F4590]">Locations</ol>
        <ol className="cursor-pointer hover:text-[#1F4590]">Contact</ol>
        <button className="bg-[#1F4590] hover:bg-[#072c75] text-white active:scale-95 px-4 py-2 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
