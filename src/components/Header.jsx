import { BsInbox } from "react-icons/bs";
import { RiDoorLockLine } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import { flex } from "../constants/constants";
import { SiLionair } from "react-icons/si";
import { PiHandsClappingThin } from "react-icons/pi";
import { FaApple } from "react-icons/fa";
import { SiWindows10 } from "react-icons/si";
import '../App.css'
import About from "./About";
import MobileAbout from "../MobileComponents/MobileAbout";
import Footer from "./Footer";
import Benefits from "./Benefits";
import AlphaSection from "./AlphaSection";
import StageSection from "./StageSection";
import Team from "./Team";
import ScrollElement from "./ScrollElement";
import Nav from "./Nav";


const Header = () => {
  return (
    <div className="bg-[#e8ebf1]">
      <Nav />
      <div className="flex flex-col py-5 xl:flex-row px-10 ">
        <div
          className={`${flex} mb-7 xl:mb-0 rounded-xl flex-col xl:w-[50%] py-10 px-6 md:px-0 xl:rounded-l-xl bg-white`}
        >
          <SiLionair size={60} />
          <div className="font-[sora] my-10 text-3xl md:text-5xl text-center text-bold">
            <h1>NFD platform</h1>
            <h1 className="text-violet-500 mt-3">“NFD.gg”</h1>
          </div>
          <div className={`${flex} flex-col font-[poppins]`}>
            <p className="text-center mb-5 text-sm md:text-lg inline-block">
              An Alpha community 2.0 with its own platform for participating,
              <br className="xl:block hidden" />
              searching, and tracking any crypto related information.
            </p>
            <div className="hidden xl:block">
              <div className="flex text-sm justify-between mb-8">
                <div
                  className={`${flex} bg-white rounded-xl px-1 py-1 shadow-xl shadow-[#e8ebf1]`}
                >
                  <BsInbox
                    className="bg-[#e8ebf1] p-2 my-1 mr-3 rounded-md"
                    size={35}
                  />
                  <p>Info in one place</p>
                </div>
                <div
                  className={`${flex} bg-white rounded-xl px-2 mx-4 shadow-xl shadow-[#e8ebf1]`}
                >
                  <RiDoorLockLine
                    className="bg-[#e8ebf1] p-2 my-1 mr-3 rounded-md"
                    size={35}
                  />
                  <p>Private tools</p>
                </div>
                <div
                  className={`${flex} bg-white rounded-xl px-2 shadow-xl shadow-[#e8ebf1]`}
                >
                  <FaGear
                    className="bg-[#e8ebf1] p-2 my-1 mr-3 rounded-md"
                    size={35}
                  />
                  <p>Wide functionality</p>
                </div>
              </div>
            </div>
            <div
              className={`${flex} md:flex-row flex-col items-center justify-center mt-5`}
            >
              <button className="button px-10 md:mr-10 ">
                <a href="https://app.nfd.gg/">Try Platform</a>
                <div className="top"></div>
                <div className="bottom"></div>
              </button>
              <button className="text-blue-500">How it works?</button>
            </div>
          </div>
          <div className="semi"></div>
        </div>

        <div
          className={`flex flex-col bg-black rounded-xl  items-center px-6 md:px-0 py-10 xl:w-[50%]   xl:rounded-r-xl`}
        >
          <img src="" alt="" />
          <div
            className={`${flex} border-2 text-white px-3 py-1 my-14 border-blue-500 rounded-2xl`}
          >
            <PiHandsClappingThin />
            <p>Software by NFD</p>
          </div>
          <div className="font-[sora] text-3xl md:text-5xl text-center text-bold">
            <h1 className="gradient-text">NFD platform</h1>
            <h1 className="text-violet-500 mt-3">“Combine”</h1>
          </div>
          <p className="text-gray-500 mt-5 text-lg text-center">
            Handle your crypto-wallets, farm activities and retrodrops on a{" "}
            <br className="xl:block hidden" /> single app.
          </p>
          <div className="hidden xl:block">
            <div
              className={`flex border-b-blue-500 border-b-2 text-white my-6 `}
            >
              <div
                className={`flex items-center mr-8 border-b-[1px] border-b-blue-500 pb-[20px] px-10`}
              >
                <FaApple size={30} className="mr-2" />
                <p>macOs</p>
              </div>
              <div
                className={`shadow-inner shadow-blue-800 -skew-x-6 flex items-center border-b-[1px] border-b-blue-500 pb-[20px] px-10`}
              >
                <SiWindows10 size={23} className="mr-2" />
                <p>Windows</p>
              </div>
            </div>
          </div>
          <div className={`${flex} flex-col md:flex-row mt-5`}>
            <button className="button md:mr-10">
              <a href="https://app.nfd.gg/">Try Platform</a>
              <div className="top bg-black"></div>
              <div className="bottom bg-black"></div>
            </button>
            <button className="text-blue-500">How it works?</button>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <About />
      </div>
      <div className="block xl:hidden">
        <MobileAbout />
      </div>
      <ScrollElement />
      <AlphaSection />
      <Benefits />
      <StageSection />
      <Team />
      <Footer />
    </div>
  );
}

export default Header
