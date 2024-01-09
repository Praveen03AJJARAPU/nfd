import '../App.css';
import Logo from '../components/Logo';
import { flex } from '../constants/constants';

const About = () => {
   
  return (
    <div className="py-20 relative bg-white">
      <div className={`flex sticky -z-0 top-0 py-20 bg-white gap-24 px-10`}>
        <div className="">
          <div className="lg:w-[500px] h-[600px] my-10">
            <h1 className="text-[55px] mb-5 font-semibold font-sora">
              The first <br /> web3 crypto <br /> platform
            </h1>
            <h3 className="text-xl font-bold mb-5 font-poppins">Problem</h3>
            <p className="text-gray-600 xl:w-[100%] text-lg">
              Today, even in alpha communities, there's an enormous volume of
              information that members have to wade through for 6-8+ hours a
              day. Cutting through the noise of spam is a real problem even
              where there's something genuinely worth knowing.
            </p>
          </div>
        </div>
        <div className="h-[500px] w-[300rem]">
          <div className="relative">
            <img
              src="../../images/block.png"
              className="w-full h-full object"
              alt=""
            />
            <img
              src="../../images/cubeBrokenOPT.png"
              className="absolute w-[800px] -top-28 left-0"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:w-[500px] h-[700px] mb-40 relative top-0 mx-10 px-10 flex justify-center flex-col z-50  bg-white">
        <h1 className="text-[55px] mb-5 font-semibold font-sora">
          We work to make <br /> your life easier
        </h1>
        <h3 className="text-xl font-bold mb-5 font-poppins">Solution</h3>
        <p className="text-gray-600 text-lg">
          NFD.gg heralds a new era in alpha communities, one where they have
          their own platform, which structures and condenses relevant
          information on all these alpha activities, where our team monitors any
          updates on these activities 24/7. No more reading 2000+ discord
          messages a day and tracking twitter day in, day out. Everything you
          ever need to know can be found on NFD.gg.
        </p>
        <div className="w-full h-[1px] my-8 bg-gray-300"></div>
        <div
          className={`${flex} bg-white rounded-xl px-2 shadow-2xl shadow-gray-300 w-max py-2 items-center font-semibold`}
        >
          <div className="bg-[#e8ebf1] p-2 rounded-xl mr-2">
            <Logo className="h-5" />
          </div>
          <p>NFD will save you time and help you earn money in crypto.</p>
        </div>
      </div>
    </div>
  );
}

export default About