import { useState } from "react";
import { slideRight, team } from "../constants/constants";
import { motion, useAnimation } from "framer-motion";

const Team = () => {
    const [slide, setSlide] = useState(null);
    const animation = useAnimation();

  return (
    <div className="flex xl:flex-row  flex-col gap-16 justify-around">
      <div className="xl:w-1/3 md:px-16 text-center md:text-left flex flex-col gap-10">
        <h1 className="text-3xl xl:text-5xl font-sora">
          We are delighted to introduce the NFD team members to you
        </h1>
        <p className="text-gray-500 text-lg ">
          We are delighted to introduce the NFD team members to you NFD team is
          always open to new partnerships and new team members, so if you have a
          desire to join and you have a big experience in development or crypto
          - just leave your request in form and we will consider it.
        </p>
        <button className="button">
          <div className="top"></div>
          <div className="bottom"></div>
          Fill out a form
        </button>
      </div>

      <div className="grid bg-white h-full md:mx-auto xl:mx-0 rounded-r-xl grid-cols-3">
        {team.map((item, id) => (
          <div
            className="relative"
            onMouseEnter={() => {
              setSlide((prev) => (prev = id));
              console.log("hi");
            }}
            onMouseLeave={() => setSlide((prev) => (prev = null))}
          >
            <div
              className={`md:w-[200px] h-[230px] ${
                id === 2 ? "rounded-tr-xl" : id === 5 ? "rounded-br-xl" : ""
              } flex flex-col md:p-5 border-[1px] border-gray-300 justify-center z-0 items-center text-center`}
            >
              <div
                className={`border-yellow-500 w-[50px] md:w-[110px] rounded-full p-1 border-2 `}
              >
                <div className="relative">
                  <div
                    className={`w-[40px] h-[40px] md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-r from-${item.color[0]}-300 to-${item.color[1]}-300`}
                  ></div>
                  <img
                    src={`${item.image}`}
                    className="absolute w-[30px] h-[30px] md:w-[70px] md:h-[70px] top-1 left-1 md:top-2 md:left-4"
                    alt=""
                  />
                </div>
              </div>
              <p>{item.name}</p>
              <p>{item.role}</p>
            </div>
            <div className="hidden lg:block">
              <motion.div
                variants={slideRight}
                initial='hidden'
                animate="show"
                className={`w-[200px] h-[200px] bg-white absolute top-0 left-0 z-10 border-r-[1px] border-gray-400 ${
                  id === slide ? "block" : "hidden"
                }`}
              >
                <p className="text-center p-1 border-b-[1px] border-gray-400">
                  More info
                </p>
                <div className="flex items-center p-2 gap-3 justify-center">
                  <div
                    className={`p-1 w-7 h-7 rounded-full bg-gradient-to-r from-${item.color[0]}-300 to-${item.color[1]}-300`}
                  >
                    <img
                      src={`${item.image}`}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>{item.name}</p>
                    <p>{item.role}</p>
                  </div>
                </div>
                <div className="text-gray-500 text-xs px-5 text-center font-poppins">
                  <p>{item.info}</p>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team