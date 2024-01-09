import { stages } from "../constants/constants";
import '../App.css'

import {Swiper, SwiperSlide} from "swiper/react";

const StageSection = () => {
  return (
    <div className=" relative bg-black text-white py-44 my-[300px]">
      <svg
        width="1766"
        className="absolute w-full -top-[180px]"
        height="251"
        viewBox="0 0 1766 251"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1255.58 9.46238C1265.03 3.65843 1275.9 0.585938 1286.99 0.585938H1705.88C1739.02 0.585938 1765.88 27.4489 1765.88 60.5859V191C1765.88 224.137 1739.02 251 1705.88 251H57.2965C26.1401 251 0.882812 225.743 0.882812 194.586V194.586C0.882812 163.43 26.1401 138.173 57.2965 138.173H1029.11C1040.2 138.173 1051.07 135.1 1060.52 129.296L1255.58 9.46238Z"
          fill="#000"
        />
      </svg>
      <div className="">
        <div className="flex flex-col  items-center">
          <h1 className="text-2xl  ms:text-4xl lg:text-6xl font-sora leading-tight mb-10 text-center">
            NFD - game changing crypto <br /> platform
          </h1>
          <div className="flex gap-16 mb-20">
            <div className="flex gap-3 items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-green-600"></div>
              <p>Done</p>
            </div>
            <div className="  flex gap-3 items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-orange-600"></div>
              <p>In work</p>
            </div>
            <div className=" flex gap-3 items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
              <p>Upcoming</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-white flex-wrap flex items- justify-around">
            {stages.map((items, id) => (
              <div className="w-[250px] capitalize" key={id}>
                <p className="border-b-[1px] py-3 mb-2 text-xl font-semibold border-gray-400">
                  Stage {0 + (id + 1)}
                </p>
                {items?.arr.map((item, innnerId) => (
                  <div key={innnerId}>
                    <div className="flex gap-3 items-center  h-">
                      <div
                        className={`w-[7px] h-[7px] rounded-full ${
                          item.color === "o"
                            ? "bg-orange-500 animate-pulse duration-300"
                            : item.color === "w"
                            ? "bg-white"
                            : "bg-green-500"
                        }`}
                      ></div>
                      <p className="w-[200px]">{item.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <svg
        width="1718"
        height="362"
        viewBox="0 0 1718 362"
        fill="none"
        className="absolute -bottom-[200px] w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M579.637 222.275C590.908 206.578 609.05 197.27 628.374 197.27H1658C1691.14 197.27 1718 170.407 1718 137.27V60.5C1718 27.3629 1691.14 0.5 1658 0.5H60C26.8629 0.5 0 27.3629 0 60.5V302C0 335.137 26.8629 362 60 362H448.526C467.851 362 485.993 352.692 497.264 336.995L579.637 222.275Z"
          fill="#000"
        />
      </svg>
    </div>
  );
}

export default StageSection