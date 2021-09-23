const Header = () => {
  return (
    <header className="px-2 md:px-20 py-5 fixed w-full top-0 z-10 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl tracking-widest cursor-pointer">MNTN</h2>
        <div className="flex items-center space-x-8">
          <ul className="font-bold text-lg hover:text-gray-600 cursor-pointer">
            Equipment
          </ul>
          <ul className="font-bold text-lg hover:text-gray-600 cursor-pointer">
            About us
          </ul>
          <ul className="font-bold text-lg hover:text-gray-600 cursor-pointer">
            Blog
          </ul>
        </div>
        <div>
          <ul className="font-bold text-lg hover:text-gray-600 cursor-pointer">
            Account
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
