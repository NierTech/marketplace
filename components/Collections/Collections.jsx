import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import carousel1 from "../../assets/carousel/carousel-r1.png";
import carousel2 from "../../assets/carousel/carousel-r2.png";
import carousel3 from "../../assets/carousel/carousel-r3.png";
import carousel4 from "../../assets/carousel/carousel-r4.png";
const Collections = () => {
  const [value, setValue] = React.useState(0);
  const carousel = [
    {
      id: Math.floor(Math.random() * 120),
      image: carousel1,
      alt: "Carousel cards",
    },
    {
      id: Math.floor(Math.random() * 120),
      image: carousel2,
      alt: "Carousel cards",
    },
    {
      id: Math.floor(Math.random() * 120),
      image: carousel3,
      alt: "Carousel cards",
    },
    {
      id: Math.floor(Math.random() * 120),
      image: carousel4,
      alt: "Carousel cards",
    },
  ];
  const length = carousel.length;
  const nextSlide = () => {
    setValue(value === length - 1 ? 0 : value + 1);
  };
  const prevSlide = () => {
    setValue(value === 0 ? length - 1 : value - 1);
  };
  const collectionAnimation = {
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
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      variants={collectionAnimation}
    >
      <div className="flex justify-center">
        <h1 className="font-inter font-semibold text-2xl">
          Popular Collections
        </h1>
      </div>
      <div className="relative flex justify-center">
        <button type="button" className="" onClick={nextSlide}>
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={100}
            className="sm:w-12 md:w-14"
          >
            <path
              d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591zm-.289 7.563v-5.446l-3.522 2.719z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <div className="py-12">
          {carousel.map((item, key) => {
            return (
              <div
                key={key}
                className={key === value ? "slider active" : "slider"}
              >
                {key === value && <Image src={item.image} alt={item.alt} />}
              </div>
            );
          })}
        </div>
        <button type="button" className="" onClick={prevSlide}>
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={100}
            className="sm:w-12 md:w-14 "
          >
            <path
              d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default Collections;
