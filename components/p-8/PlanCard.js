const PlanCard = () => {
  return (
    <div className="shadow-sm bg-[#0F1F4B] border-gray-400 shadow rounded-3xl flex flex-col justify-center items-center px-12 py-16 space-y-6 group hover:bg-white bg-opacity-20 transition duration-1000 hover:text-black">
      <h2 className="text-xl font-semibold">Starter</h2>
      <p className="text-gray-400">up to 3 users</p>
      <p>
        $<span className="text-4xl font-semibold">29</span>
        <p className="text-sm font-light text-gray-400">per month</p>
      </p>
      <button className="py-2 px-16 rounded-full border border-gray-50 group-hover:bg-p_8_primary group-hover:text-white">
        Order
      </button>
    </div>
  );
};

export default PlanCard;
