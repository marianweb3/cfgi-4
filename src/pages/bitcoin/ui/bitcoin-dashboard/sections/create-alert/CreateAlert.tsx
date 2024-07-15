import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const CreateAlert = () => {
  return (
    <motion.section
      variants={item}
      className="bg-[#141414B2] rounded-[32px] border border-[#FFFFFF1A] p-[20px] md:p-[25px] lg:p-[30px] grow flex flex-col gap-[20px] md:gap-[25px] lg:gap-[30px] col-span-2 xl:col-span-1"
    >
      <h3 className="text-white font-work-sans font-medium text-[32px] leading-[36px] md:text-[36px] md:leading-[40px] lg:text-[40px] lg:leading-[44px] tracking-wider">
        AI Suggestion
      </h3>

      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[25px] lg:gap-[30px]">
        <div className="border-2 border-[#FFFFFF1A] rounded-full p-[20px] md:p-[25px] lg:p-[30px] md:pl-[40px] lg:pl-[50px] flex items-center justify-between grow">
          <div className="flex flex-col">
            <span className="text-white font-work-sans text-[30px] leading-[30px] md:text-[35px] md:leading-[35px] lg:text-[40px] lg:leading-[40px] font-medium">
              Custom
            </span>
            <span className="text-white font-work-sans text-[30px] leading-[30px] md:text-[35px] md:leading-[35px] lg:text-[40px] lg:leading-[40px] font-medium">
              Alerts
            </span>
          </div>
          <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] flex items-center justify-center rounded-full bg-[#FF532E] font-medium text-[20px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[28px] lg:leading-[32px] tracking-wider">
            0
          </div>
        </div>
        <div className="border-2 border-[#FFFFFF1A] rounded-full p-[20px] md:p-[25px] lg:p-[30px] md:pl-[40px] lg:pl-[50px] flex items-center justify-between grow">
          <div className="flex flex-col">
            <span className="text-white font-work-sans text-[30px] leading-[30px] md:text-[35px] md:leading-[35px] lg:text-[40px] lg:leading-[40px] font-medium">
              Unused
            </span>
            <span className="text-white font-work-sans text-[30px] leading-[30px] md:text-[35px] md:leading-[35px] lg:text-[40px] lg:leading-[40px] font-medium">
              Alerts
            </span>
          </div>
          <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] flex items-center justify-center rounded-full bg-[#FF532E] font-medium text-[20px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[28px] lg:leading-[32px] tracking-wider">
            100
          </div>
        </div>
      </div>

      <button className="bg-orangeBg hover:border-2 hover:border-orangeBg hover:bg-transparent transition-all duration-300 ease-in-out hover:text-orangeBg w-full text-white px-8 py-2 rounded-full font-semibold text-[20px] leading-[28px] md:text-[22px] md:leading-[30px] lg:text-[24px] lg:leading-[36px] tracking-tighter h-full">
        Create Alert
      </button>
    </motion.section>
  );
};

export default CreateAlert;
