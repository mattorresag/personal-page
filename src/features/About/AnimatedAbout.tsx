"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { About } from "@/features/About/About";

export const AnimatedAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <About />
    </motion.div>
  );
};
