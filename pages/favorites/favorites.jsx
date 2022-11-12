import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Favorites = () => {
  const router = useRouter();
  const {
    query: { image, name, tokens, description, other_description, price },
  } = router;
  const props = {
    image,
    name,
    tokens,
    description,
    other_description,
    price,
  };
  const favoritesAnimation = {
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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      variants={favoritesAnimation}
    >
      <div className="flex justify-center py-12">
        <h1 className="font-inter font-semibold text-4xl">Your Favorites</h1>
      </div>
      <div className="flex flex-col shadow-2xl rounded-xl p-4">
        <div>
          <Image
            src={props.image}
            alt="Cards image"
            className="cursor-pointer"
          />
          <div className="flex justify-between pt-4">
            <h1 className="font-inter font-semibold text-xl">{props.name}</h1>
            <Image src={props.tokens} alt="Tokens image" />
          </div>
          <div className="pt-2">
            <p className="font-inter font-medium text-sm text-[#4A5568]">
              {props.description}
            </p>
          </div>
          <div className="flex justify-between pt-7">
            <h2 className="font-inter font-semibold text-base">
              {props.other_description}
            </h2>
            <p className="font-inter font-semibold text-base text-[#029CF5]">
              {props.price}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Favorites;
