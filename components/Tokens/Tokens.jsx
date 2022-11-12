import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import tokens from "../../assets/images/tokens.png";
const Tokens = () => {
  const tokensAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
      },
    }),
  };
  return (
    <motion.div
      className="flex justify-center py-4 sm:hidden md:hidden lg:hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      variants={tokensAnimation}
    >
      <Image src={tokens} alt="tokens" />
    </motion.div>
  );
};

export default Tokens;
