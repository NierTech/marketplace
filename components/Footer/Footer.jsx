import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import phone1 from "../../assets/footer/phone1.png";
import phone2 from "../../assets/footer/phone2.png";
import googlePlay from "../../assets/footer/googlePlay.png";
import appStore from "../../assets/footer/appStore.png";
const Footer = () => {
  const footerAnimation = {
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
      custon={1}
      variants={footerAnimation}
    >
      <div className="flex justify-between bg-[#F5F7FA] mt-14 pt-12 px-24 sm:mt-8 sm:p-4 sm:mt-24 md:mt-24 lg:mt-24">
        <div>
          <h1 className="font-inter font-extrabold text-[48px] max-w-xl sm:text-xl">
            Manage NFT from your mobile
          </h1>
          <p className="font-inter font-normal text-lg max-w-xl sm:text-sm">
            Download the app to manage your NFT’s,Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. neque sed imperdiet nibh lectus feugiat
            nunc sem.
          </p>
          <div className="flex flex-col gap-3 mt-20 sm:mt-12">
            <p className="font-inter font-medium text-lg">Get the app</p>
            <div className="flex gap-4">
              <a href="#">
                <Image src={googlePlay} alt="google play" />
              </a>
              <a href="#">
                <Image src={appStore} alt="app store" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden m:hidden lg:hidden">
          <Image src={phone1} alt="phone Up" />
          <Image src={phone2} alt="phone Down" />
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
