import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";


const MobileAbout = () => {
    const [firstModal, setFirstModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);
  return (
    <div className="bg-white py-24">
      <div className="text-center  mx-auto md:w-[60%]">
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-sora">
            THE FIRST WEB3 CRYPTO PLATFORM
          </h1>
          <p className="text-gray-500 text-lg mt-3">
            In today's cryptospace there is a big problem of "information
            noise". Anyone getting into crypto and trying.
          </p>
        </div>

        <div>
          <div
            className="border-y-2 py-6"
            onClick={() => setFirstModal((prev) => !prev)}
          >
            <div className="flex cursor-pointer font-poppins  justify-between ">
              <div className="flex">
                <p className="text-2xl mr-5">01</p>
                <div className="text-2xl text-left">
                  <h3 className="font-semibold">Problem</h3>
                  <p>Crypto infonoise</p>
                </div>
              </div>
              {firstModal == true ? (
                <MdArrowOutward size={38} />
              ) : (
                <GoArrowDownRight size={40} className="text-violet-500" />
              )}
            </div>
            <div
              className={`${firstModal == true ? "block" : "hidden"} text-left`}
            >
              <img
                src="../../images/cubeBrokenOPT.png"
                className="w-24 h-24 my-5 mx-auto object-cover"
                alt=""
              />
              <h3 className="mb-3 font-sora text-2xl">
                The first web3 crypto platform
              </h3>
              <p className="text-gray-500">
                In today's cryptospace there is a big problem of "information
                noise". Anyone getting into crypto and trying to find worthwhile
                activities or alpha projects in it encounters a huge amount of
                information that they have to filter daily.
              </p>
            </div>
          </div>
          <div className=" border-b-2 py-6">
            <div
              className="flex font-poppins justify-between"
              onClick={() => setSecondModal((prev) => !prev)}
            >
              <div className="flex">
                <p className="text-2xl mr-4">02</p>
                <div className="text-2xl text-left">
                  <h3 className="font-semibold">Solution</h3>
                  <p>NFD Platform</p>
                </div>
              </div>
              {secondModal == true ? (
                <MdArrowOutward size={38} />
              ) : (
                <GoArrowDownRight size={40} className="text-violet-500" />
              )}
            </div>

            <div
              className={`${secondModal == true ? "block" : "hidden"} text-left`}
            >
              <img
                src="../../images/cubeBrokenOPT.png"
                className="w-24 h-24 my-5 mx-auto object-cover"
                alt=""
              />
              <h3 className="mb-3 font-sora text-2xl">
                We work to make your life easier
              </h3>
              <p className="text-gray-500">
                With NFD you will be able to participate only in the most
                selected activities, thanks to which you can quickly understand
                crypto and earn money. Also with the help of our Aggregator you
                will be able to track all the necessary information on the
                projects you are interested in in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAbout;