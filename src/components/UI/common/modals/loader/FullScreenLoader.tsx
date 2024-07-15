import { useEffect } from "react";
import { motion } from "framer-motion";

interface FullScreenLoaderProps {
  isLoading: boolean;
  message?: string;
}

const loaderVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const FullScreenLoader = ({ isLoading, message }: FullScreenLoaderProps) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return isLoading ? (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={loaderVariants}
    >
      <div className="loader flex flex-col items-center">
        <svg
          className="animate-spin h-10 w-10 text-white mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        {message && <p className="text-white mt-4">{message}</p>}
      </div>
    </motion.div>
  ) : null;
};

export default FullScreenLoader;
