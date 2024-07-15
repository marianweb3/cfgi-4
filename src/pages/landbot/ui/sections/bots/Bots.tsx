import SectionHeader from "../../../../../components/UI/common/titles/SectionHeader";

const botItems = [
  {
    title: "/Buybot",
    description:
      "Keep your community updated by using our telegram buybot for every single buy into your chosen tokens",
    imgSrc: "/assets/landbot/forest.png",
    bgImgSrc: "/assets/landbot/sky-section-1.png",
    ellipseSrc: "/assets/landbot/f-ellipse.png",
  },
  {
    title: "/Burnbot",
    description: "Automate token burn notification",
    imgSrc: "/assets/landbot/lava.png",
    bgImgSrc: "/assets/landbot/sky-section-1.png",
    ellipseSrc: "/assets/landbot/l-ellipse.png",
  },
  {
    title: "/NFTbot",
    description: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "/assets/landbot/rocks.png",
    bgImgSrc: "/assets/landbot/sky-section-1.png",
    ellipseSrc: "/assets/landbot/r-ellipse.png",
  },
  {
    title: "/Sellbot",
    description:
      "Keep your community informed of any sells using our sellbot in your telegram community",
    imgSrc: "/assets/landbot/ice.png",
    bgImgSrc: "/assets/landbot/sky-section-1.png",
    ellipseSrc: "/assets/landbot/i-ellipse.png",
  },
];

const Bots = () => {
  return (
    <section className="max-w-[1600px] mx-auto w-full mt-20 md:mt-[207px] flex flex-col justify-between gap-16 lg:px-0 px-4">
      <SectionHeader sectionNumber={5} title={"Bots"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {botItems.map((item, index) => (
          <div
            key={index}
            className="py-[38px] pl-[30px] w-full text-[#0D0D0D] border-2 border-[#FFFFFF1A] rounded-[32px] relative overflow-hidden"
          >
            <div className="max-w-[418px] relative z-10">
              <h3 className="font-neue font-medium text-[40px] leading-[60px] -tracking-normal text-white">
                {item.title}
              </h3>
              <p className="text-[#FFFFFF99] font-work-sans font-extralight text-[20px] leading-[30px]">
                {item.description}
              </p>
            </div>
            <div className="absolute inset-0 bg-[#141414] bg-opacity-[.8] w-full h-full z-[9] rounded-[32px]"></div>
            <img
              src={item.imgSrc}
              alt={item.title}
              className="absolute right-0 bottom-0 z-10"
            />
            <img
              src={item.bgImgSrc}
              alt="Sky"
              className="absolute top-0 left-0 h-full w-full"
            />
            <img
              src={item.ellipseSrc}
              alt="Ellipse"
              className="absolute bottom-0 right-[-15%] h-full w-full z-[9]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bots;
