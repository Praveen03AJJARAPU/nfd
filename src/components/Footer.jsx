import '../App.css'
import { flex } from '../constants/constants'
import { FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Logo from './Logo';

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[600px] bg-violet-500 mt-24 flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl ms:text-3xl lg:text-5xl font-sora ">
          Join our community
        </h1>
        <div
          className={`${flex} flex-col ms:flex-row gap-10 justify-center my-10`}
        >
          <button
            className={`${flex} justify-center button bg-white before:bg-white after:bg-white text-violet-500`}
          >
            <FaDiscord />
            <p>Join Discord</p>
            <div className="top bg-violet-500"></div>
            <div className="bottom bg-violet-500"></div>
          </button>

          <button
            className={`${flex} justify-center button bg-violet-500 before:bg-violet-500 after:bg-violet-500 border-white border-2`}
          >
            <BsTwitter className="mr-3" />
            <p>Follow Twitter</p>
            <div className="top bg-violet-500"></div>
            <div className="bottom bg-violet-500"></div>
          </button>
        </div>
        <a href="" className="underline text-white">
          Read out whitepaper
        </a>
      </div>
      <div className="flex bg-white justify-between px-5 py-5">
        <div className="flex items-center ">
            <div className={`${flex}`}>
          <Logo />
          <p className='text-xl font-sora font-semibold ml-5'>NFD</p>
            </div>
          <div className="xl:block hidden">
            <div className={`${flex} flex-1 justify-between`}>
              <p className='mx-10'>© 2023 NFD, INC. ALL RIGHTS RESERVED.</p>
              <a href="#" className="underline mr-9">
                Privacy
              </a>
              <a href="#" className="underline mr-9">
                Terms of use
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between mr-5 items-center">
          <a href="#" className="mr-4 underline hidden lg:block">
            contact@nfd.gg
          </a>
          <button className="button">
            Try App
            <div className="top"></div>
            <div className="bottom"></div>
          </button>
        </div>
      </div>
      <div className='bg-white flex justify-between px-7'>
      <a href="#" className="underline mr-9">
                Privacy
              </a>
              <a href="#" className="underline mr-9">
                Terms of use
              </a>
      </div>
    </div>
  );
}

export default Footer