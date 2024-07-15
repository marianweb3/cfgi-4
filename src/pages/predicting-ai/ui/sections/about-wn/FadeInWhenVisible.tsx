import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  direction: "left" | "right";
  className?: string;
}

const FadeInWhenVisible = ({
  children,
  direction,
  className,
}: FadeInWhenVisibleProps) => {
  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
