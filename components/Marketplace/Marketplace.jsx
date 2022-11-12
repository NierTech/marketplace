import React from "react";
import { motion } from "framer-motion";
const Marketplace = () => {
  const marketplaceAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
      },
    }),
  };
  const description = [
    {
      id: Math.floor(Math.random() * 150),
      counter: "10.4M",
      name: "Digital assets",
    },
    {
      id: Math.floor(Math.random() * 150),
      counter: "300k",
      name: "NFT's Creator",
    },
    {
      id: Math.floor(Math.random() * 150),
      counter: "512+",
      name: "Open Auctions Per week",
    },
  ];
  return (
    <motion.div
      className="bg-[#029CF5] flex justify-between mx-24 p-12 rounded-2xl sm:mx-auto md:auto lg:auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      variants={marketplaceAnimation}
    >
      <div>
        <h1 className="font-inter font-bold text-[40px] text-white sm:text-2xl md:text-2xl lg:text-2xl">
          Marketplace In Number
        </h1>
        <p className="font-inter font-normal text-base text-white max-w-xl pt-4 sm:text-sm md:text-sm lg:text-sm">
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks for navigating OpenSea.
        </p>
        <div className="pt-12">
          <a
            href="#"
            className="font-inter font-medium text-xl text-[#029CF5] p-6 bg-white rounded-full sm:text-sm sm:p-2 md:text-sm md:p-2 lg:text-sm lg:p-2"
          >
            Create Your NFT
          </a>
        </div>
      </div>
      {description.map((item, key) => {
        return (
          <div
            className="flex items-center sm:hidden md:hidden lg:hidden"
            key={key}
          >
            <div className="border border-y-[35px] border-white"></div>
            <div className="px-4 text-start">
              <h1 className="font-inter font-bold text-[28px] text-white">
                {item.counter}
              </h1>
              <p className="font-inter font-normal text-[16px] text-white">
                {item.name}
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Marketplace;
