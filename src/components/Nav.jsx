import { FaDiscord, FaTwitter } from "react-icons/fa"
import { navItems } from "../constants/constants"
import { motion, useAnimation } from "framer-motion"
import Logo from "./Logo"
import '../App.css'
import { useEffect, useState } from "react"

const Nav = () => {
    const controls = useAnimation();
    const [isFixed, setIsFixed] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    
        const scrollBy = 10;
    
        const handleScroll = () => {
            const scrollPos = window.scrollY;
    
            if (scrollPos > scrollBy) {
                setIsFixed(true)
                controls.start({x:0, opacity: 1})
            } else {
                setIsFixed(false);
                controls.start({ x: 1000, opacity: 0 });
            }
        };
    
        useEffect(() => {
           
            controls.start({ x: 1000, opacity: 0 });
    
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, [controls]);
  return (
    <div className={`${isFixed ? "fixed" : ""}  z-50 ${openNav ? 'overflow-hidden' : ''}`}>
      <motion.div
        className={`flex  nav justify-between items-center px-5 ${
          isFixed
            ? "w-screen bg-black backdrop-blur-md px-5 text-white "
            : "bg-white rounded-xl mx-10 "
        } duration-300 ease-in px-3 py-4`}
      >
        <div className="flex items-center">
          <Logo />
          <h1 className="text-xl font-bold">NFD</h1>
        </div>
        <div className="hidden lg:block">
          <div className="flex  gap-10 items-center">
            {navItems.map((item) => (
              <p className="duration-500 ease hover:text-violet-500 border-b-2 border-b-transparent cursor-pointer font-semibold hover:border-violet-500">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="flex gap-10 items-center">
            <FaDiscord size={32} />
            <FaTwitter size={32} />
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="mx-10 flex items-center gap-10">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={controls}
              transition={{ duration: 0.05 }}
              className={`${isFixed ? "block" : "hidden"}`}
            >
              Combine software
            </motion.p>
            <motion.button
              className={`${isFixed ? "block" : "hidden"}`}
              initial={{ opacity: 0, x: 100 }}
              animate={controls}
              transition={{ duration: 0.05 }}
            >
              Platform
            </motion.button>
          </div>
        </div>
        <div onClick={() => setOpenNav((prev) => !prev)}>
          <div className={`w-6 h-[3px] mb-2 rounded-xl ${isFixed ? 'bg-white' : 'bg-black'} `}></div>
          <div className={`w-4 h-[3px] rounded-xl ${isFixed ? 'bg-white' : 'bg-black'} `}></div>
        </div>
      </motion.div>
      <div className={`w-screen h-screen ${openNav ? 'block' : 'hidden'} bg-black`}>
        <div>
          {navItems.map((item) => (
            <p className="p-5 pb-10 text-center text-xl underline text-white">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nav