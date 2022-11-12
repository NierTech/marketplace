import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import mainImages from "../../assets/images/mainImages.png";
const Main = () => {
  const mainAnimation = {
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
  const imageAnimation = {
    hidden: {
      x: 100,
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
      className="flex justify-between sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col justify-center mx-32 gap-3 sm:mx-0 sm:px-12 lg:mx-0 md:mx-0 sm:my-24 md:my-24 lg:my-24"
        custom={1}
        variants={mainAnimation}
      >
        <div className="flex gap-4">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-400 font-inter font-bold">
            NFTea
          </h1>
          <p className="text-2xl font-inter font-bold text-[#029CF5]">
            Marketplace
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-inter font-bold max-w-[540px] sm:text-3xl md:text-3xl lg:text-3xl">
            Explore, collect, and sell NFTs
          </h1>
          <p className="text-2xl font-inter font-normal text-[#4A5568] max-w-[540px] sm:text-base md:text-base lg:text-xl">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            className="px-8 py-3 bg-[#029CF5] rounded-full text-white text-xl font-inter font-thin sm:text-base sm:px-6"
          >
            Explore
          </button>
          <button
            type="button"
            className="px-8 py-3 rounded-full text-[#029CF5] text-xl font-inter font-thin bg-transparent border border-[#029CF5] sm:text-base sm:px-6"
          >
            Create
          </button>
        </div>
      </motion.div>
      <motion.div
        className="sm:hidden md:hidden lg:hidden"
        custom={1}
        variants={imageAnimation}
      >
        <Image src={mainImages} alt="Main Images" />
      </motion.div>
    </motion.div>
  );
};

export default Main;
