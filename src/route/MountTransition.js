import React from "react";
import { motion } from "framer-motion";
const pageTransition = {
  type: "spring",
  ease: "anticipate",
  duration: 0.2,
};
const MountTransition = (props) => {
  const { children, slide = 0, slideUp = 0 } = props;
  return (
    <motion.div
      exit={{ opacity: 0, x: slide, y: slideUp }}
      initial={{ opacity: 0, x: slide, y: slideUp }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default MountTransition;
