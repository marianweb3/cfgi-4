export const leftImageVariant = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
};

export const rightImageVariant = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
};

export const otherImagesVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
};

export const contentVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 1 } },
};

export const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.5, staggerChildren: 0.3 },
  },
};

export const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
