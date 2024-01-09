import { motion } from "framer-motion"
import { benefits, slideIn } from "../constants/constants"
import { useState } from "react"
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";

const Benefits = () => {
  const [ display, setDisplay ] = useState(0);
  const [mobileModal, setmobileModal] = useState(0);
  return (
    <div className="ms:px-16 py-16 xl:py-24">
      <div className="text-center">
        <motion.h2
          className="ms:text-3xl xl:text-6xl ms:mb-3 xl:mb-6 font-sora"
          variants={slideIn(0)}
          initial="hidden"
          animate="show"
        >
          Use all the benefits of NFD
        </motion.h2>
        <motion.p
          variants={slideIn(0.5)}
          className="text-sm ms:text-md xl:text-xl text-gray-600 font-poppins"
          initial="hidden"
          animate="show"
        >
          Unlock the next level of control with customizable real-time feeds,
          charts, <br className="hidden xl:block" /> watchlists, and alerts with
          NFD.gg
        </motion.p>
      </div>

      <div className="hidden lg:block">
        <div className="flex justify-center items-center gap-10 my-24">
          <div className="w-1/2">
            {benefits.map((item, id) => (
              <div
                key={id}
                className={`px-10 mb-5`}
                onClick={() => setDisplay((prev) => (prev = id))}
              >
                <div
                  className={` ${
                    id == display ? "bg-gray-300" : ""
                  } duration-300 ease-linear border-[1px] rounded-2xl border-gray-300 px-5 py-5`}
                >
                  <p className="text-xl mb-2 font-sora">{item.h1}</p>
                  <p
                    className={`${
                      id == display ? "block" : "hidden"
                    } text-sm font-poppins text-gray-500`}
                  >
                    {item.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 h-full">
            <img
              src={`${benefits[display].img}`}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div>
          <div className="border-y-2 py-6">
            {benefits.map((item, id) => (
              <motion.div
                variants={slideIn(id - 0.9)}
                className={`${
                  mobileModal === id
                    ? "border-b-[1px] border-gray-300"
                    : ""
                }`}
                initial="hidden"
                animate="show"
                onClick={() => setmobileModal((prev) => (prev = id))}
              >
                <div
                  className={` ${id === 0 ? "border-t-[1px]" : ""} ${
                    mobileModal !== id ? "border-b-[1px]" : ""
                  } border-gray-300 flex cursor-pointer font-poppins py-5 justify-between`}
                >
                  <div className="flex">
                    <p className="text-2xl mr-5">{"0" + (id + 1)}</p>
                    <div className="text-2xl text-left">
                      <h3 className="font-semibold">{item.h1}</h3>
                      {/* <p>Crypto infonoise</p> */}
                    </div>
                  </div>
                  {mobileModal === id ? (
                    <MdArrowOutward size={38} />
                  ) : (
                    <GoArrowDownRight size={40} className="text-violet-500" />
                  )}
                </div>
                <div
                  className={`${
                    mobileModal == id ? "block" : "hidden"
                  } text-left`}
                >
                  <img
                    src={`${item.img}`}
                    className="ms:w-[500px] ms:h-[500px] my-7 mx-auto object-contain"
                    alt=""
                  />

                  <p className="text-gray-500 px-2">{item.p}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits