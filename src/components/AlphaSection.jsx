import { flex } from "../constants/constants"
import { MdPersonSearch } from "react-icons/md";
import { TfiLayoutAccordionList, TfiTwitter } from "react-icons/tfi";
import { TbBrandTwitter, TbBrandTwitterFilled, TbVirus } from "react-icons/tb";
import { HiMiniChevronLeft } from "react-icons/hi2";
import '../App.css'
const AlphaSection = () => {
  return (
    <div className="bg-black relative text-white w-full">
      <div className={`${flex} flex-col text-center justify-center py-20`}>
        <h1 className="text-5xl font-sora mb-16">
          Find alpha before anyone else with us
        </h1>
        <div className={`${flex} flex-col xl:flex-row gap-8 `}>
          <div
            className={`${flex} gap-3 px-5 text-xs ms:w-[400px] justify-center px- py-4 round r-one bg-blue-500`}
          >
            <MdPersonSearch size={30} />
            <p>Add a list of top Twitter accounts</p>
          </div>
          <div
            className={`flex items-center text-xs ms:w-[400px] justify-center gap-3 px-10 py-4 round bg-orange-500 `}
          >
            <TfiLayoutAccordionList size={30} />
            <p>Follow their new subscriptions.</p>
          </div>
          <div
            className={`${flex} gap-3 text-xs ms:w-[400px] ms:text-normal px-10 py-4 round bg-violet-600`}
          >
            <TbVirus size={30} />
            <p>We'll show you matches on those subscriptions.</p>
          </div>

          <div className="absolute w-[450px] top-[620px] ms:top-[600px] md:top-[550px] xl:top-[365px] -rotate-45 ms:right-24 lg:right-36 ms:w-[600px]">
            <img src="../../images/llline.svg" alt="" />
          </div>
          <div className="absolute ms:top-[690px] top-[680px] right-[75px] xl:top-[450px] ms:right-[315px] -rotate-45 lg:right-[360px]">
            <HiMiniChevronLeft className="text-white z-20" size={42} />
          </div>
        </div>
        <div className="">
          <img
            src="../../images/AlphaToolMobileOPT.webp"
            className="my-36 mx-auto"
            alt=""
          />
          <div className="bg-violet-500 p-5 gap-10 xl:absolute bottom-24 left-0 py-16 justify-between items-center flex flex-col lg:flex-row rounded-xl text-white">
            <div className=" text-center lg:w-1/2">
              <h1 className="text-4xl font-semibold mb-2">Finding Alpha is easy</h1>
              <p className="text-lg">
                Alpha search tool will let you be one of the first people to
                find the most promising alpha by tracking influencers and the
                most hyped projects.
              </p>
            </div>
            <div className="flex md:flex-row flex-col justify-center font-semibold font-poppins gap-10 items-center">
              <div className="button after:bg-inherit before:bg-inherit bg-white text-blue-500 text-center">
                Try it for free
                <div className="top bg-violet-500"></div>
                <div className="bottom bg-violet-500"></div>
              </div>
              <div className={` text-violet-500 button after:bg-inherit before:bg-inherit bg-white`}>
                <div className="flex items-center justify-center gap-2">
                <div className="top bg-violet-500"></div>
                <div className="bottom bg-violet-500"></div>
                <TbBrandTwitterFilled />
                <p>Follow Twitter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlphaSection