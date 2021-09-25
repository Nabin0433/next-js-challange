const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#111517" }}>
      <div className=" md:flex justify-between md:p-20 p-8 space-y-6 md:space-y-0">
        <div className="space-y-3 md:w-2/4">
          <h2 className="text-3xl tracking-widest cursor-pointer">MNTN</h2>
          <p>Get out there & discover your next</p>
          <p>slope, mountain & destination !</p>
          <div>
            <p className="mt-20 text-gray-400">
              Copyright {new Date(Date.now()).getFullYear().toString()} MNTN,
              Inc. Terms & Privacy
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-yellow-500 font-semibold text-xl">
            More on The Blog
          </h2>
          <p className="text-sm md:text-base hover:text-yellow-400 cursor-pointer">
            About MNTN
          </p>
          <p className="text-sm md:text-base hover:text-yellow-400 cursor-pointer">
            Contributors & Writers
          </p>
          <p className="text-sm md:text-base hover:text-yellow-400 cursor-pointer">
            Write For Us
          </p>
          <p className="text-sm md:text-base hover:text-yellow-400 cursor-pointer">
            Contact Us
          </p>
          <p className="text-sm md:text-base hover:text-yellow-400 cursor-pointer">
            Privacy Policy
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-yellow-500 font-semibold text-xl">
            More on MNTN
          </h2>
          <p className="text-sm md:text-base hover:text-yellow-400 cursor-pointer">
            The Team
          </p>
          <p className="text-sm md:text-base hover:text-yellow-400 cursor-pointer">
            Jobs
          </p>
          <p className="text-sm md:text-base hover:text-yellow-400 cursor-pointer">
            Press
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
