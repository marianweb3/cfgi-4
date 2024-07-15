import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  sectionNumber: number;
  title: string;
}

const SectionHeader = ({ sectionNumber, title }: SectionHeaderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col gap-4" ref={ref}>
      <motion.span
        className="text-white font-work-sans font-thin text-[24px] sm:text-[32px] leading-[24px] sm:leading-[32px] -tracking-wider flex items-center gap-4"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        /0{sectionNumber}{" "}
        <svg
          width="45"
          height="2"
          viewBox="0 0 45 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1.4" x2="45" y2="1.4" stroke="white" strokeWidth="1.2" />
        </svg>
      </motion.span>
      <motion.h2
        className="text-white font-neue font-medium text-[36px] sm:text-[64px] leading-[36px] sm:leading-[64px] -tracking-wider max-w-[840px]"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeader;
