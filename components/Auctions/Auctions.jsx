import React from "react";
import { motion } from "framer-motion";
import eth from "../../assets/svg/eth.svg";
import cards1 from "../../assets/cards/cards1.png";
import cards2 from "../../assets/cards/cards2.png";
import cards3 from "../../assets/cards/cards3.png";
import cards4 from "../../assets/cards/cards4.png";
import cards5 from "../../assets/cards/cards5.png";
import cards6 from "../../assets/cards/cards6.png";
import cards7 from "../../assets/cards/cards7.png";
import cards8 from "../../assets/cards/cards8.png";
import cards9 from "../../assets/cards/cards9.png";
import cards10 from "../../assets/cards/cards10.png";
import cards11 from "../../assets/cards/cards11.png";
import cards12 from "../../assets/cards/cards12.png";
import AuctionsCards from "./AuctionsCards";
const Auctions = () => {
  const cards = [
    {
      id: Math.floor(Math.random() * 60),
      image: cards1,
      name: "R66 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R66 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards2,
      name: "R67 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R67 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards3,
      name: "R68 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R68 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards4,
      name: "R69 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R69 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards5,
      name: "R70 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R70 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards6,
      name: "R71 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R71 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards7,
      name: "R72 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R72 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards8,
      name: "R73 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R73 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards9,
      name: "R74 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R74 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards10,
      name: "R75 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R75 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards11,
      name: "R76 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R76 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
    {
      id: Math.floor(Math.random() * 60),
      image: cards12,
      name: "R77 Vold",
      tokens: eth,
      description: "Highest Bid 1/1",
      other_description: "Price",
      price: "0.43 ETH",
      backside:
        "Данная карточка имеет индетификационный номер R77 Vold. Автор данной карточки является <Аноним>, стоимость карточки зависит от рейтинга автора",
    },
  ];
  const auctionsAnimation = {
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
    >
      <div className="flex justify-center py-12 ">
        <motion.h1
          className="font-inter font-semibold text-[32px]"
          custom={1}
          variants={auctionsAnimation}
        >
          Running Auctions
        </motion.h1>
      </div>
      <motion.div
        className="flex flex-wrap justify-center gap-20 "
        custom={1}
        variants={auctionsAnimation}
      >
        {cards.map((item, key) => {
          return <AuctionsCards item={item} key={key} />;
        })}
      </motion.div>
    </motion.div>
  );
};

export default Auctions;
