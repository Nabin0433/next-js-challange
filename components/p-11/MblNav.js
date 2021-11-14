const MblNav = () => {
  return (
    <div className="fixed md:hidden bottom-0 flex items-center z-[9999] w-screen bg-blue-400 rounded-t-3xl space-x-1 py-2 text-white">
      <div className="bg-blue-500 py-3 px-4 flex justify-center rounded-2xl w-1/4 text-lg font-semibold active:bg-blue-500 text-black">
        <h2>Home</h2>
      </div>
      <div className="bg-blue-400 py-3 px-4 flex justify-center rounded-2xl w-1/4 text-lg font-semibold active:bg-blue-500">
        <h2>About</h2>
      </div>
      <div className="bg-blue-400 py-3 px-4 flex justify-center rounded-2xl w-1/4 text-lg font-semibold active:bg-blue-500">
        <h2>Services</h2>
      </div>
      <div className="bg-blue-400 py-3 px-4 flex justify-center rounded-2xl w-1/4 text-lg font-semibold active:bg-blue-500">
        <h2>Contact</h2>
      </div>
    </div>
  );
};

export default MblNav;
