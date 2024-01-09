
const ScrollElement = () => {
  return (
    <div className="relative">
      <div className="bg-black flex lg:items-start sticky top-0 gap-10 lg:px-10 py-36 text-white">
        <div className="hidden lg:block">
          <img src="../../images/AggOverlayOPT.webp" alt="" />
        </div>
        <div className="lg:w-1/3">
          <div className="flex items-center lg:items-start flex-col font-poppins gap-16 ">
            <p className="text-xl  px-24 py-3 rounded-3xl font-sora bg-violet-400">
              FIRST WEB3 CRYPTO
            </p>
            <h1 className="text-5xl font-bold">
              Keeping track <br className="hidden lg:block"/> of projects <br className="hidden lg:block" />
              <span className="text-violet-500"> in one place </span>
            </h1>
            <p className="lg:w-[300px]">
              The NFD.gg aggregator allows you to create a specific card of any
              project and parse any type of information from Discord, Twitter,
              Dune Analytics, TradingView, Github etc. into your own dashboard.
            </p>
            <div className="flex gap-10">
              <button className="button">Start Creating</button>
              <button>View Roadmap</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[900px] hidden lg:block h-[600px] -top-[780px] left-10 relative z-40 ">
        <div>
          <img src="../../images/AggContentOPT.webp" alt="" />
        </div>
        <div>
          <img src="../../images/AggContent2OPT.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ScrollElement