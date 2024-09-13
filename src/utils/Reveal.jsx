/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export function Reveal({
  children,
  width = "fit-content",
  style1,
  style2,
  className1 = "",
  className2 = "",
  delay = 0.25,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        ...style1,
      }}
      className={className1}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.17, 0.67, 0.83, 0.67],
          type: "spring",
        }}
        className={className2}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background:
            "linear-gradient(120deg,rgba(61, 255, 174,1) 20%,rgb(69, 158, 177) 100%)",
          zIndex: 10,
          ...style2,
        }}
      />
    </div>
  );
}
