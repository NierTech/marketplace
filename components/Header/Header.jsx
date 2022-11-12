import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/svg/search.svg";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const nav = [
    {
      id: Math.floor(Math.random() * 100),
      name: "Favorites",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Stats",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Create",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Explore",
    },
  ];
  const handleChangeBurger = () => {
    setIsOpen(!isOpen);
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const headerAnimation = {
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
      className="shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex justify-between items-center px-12 py-6 max-w-[1440px] m-auto sm:px-2"
        custom={1}
        variants={headerAnimation}
      >
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="logotype"
              className="sm:w-36 focus:outline-none"
            />
          </Link>
        </div>
        <div className="relative flex items-center">
          <Image
            src={search}
            alt="search"
            className="absolute ml-5  pointer-events-none"
          />
          <div>
            <input
              type="text"
              placeholder="Search items, collections"
              className="px-14 py-2 border rounded-full text-lg focus:outline-none sm:hidden md:hidden"
              onChange={(e) => handleChangeValue(e)}
            />
          </div>
        </div>
        <div className={isOpen ? "showMenuNav" : "hideMenuNav"}>
          <nav>
            <ul className="flex gap-12 sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col  items-center">
              {nav.map((item, key) => {
                return (
                  <>
                    <Link
                      href={
                        `${item.name.toLowerCase()}` +
                        "/" +
                        `${item.name.toLowerCase()}`
                      }
                      key={key}
                      className="sm:text-xl"
                    >
                      <li className="font-inter font-bold text-xl text-[#029CF5] hover:text-[#2874a0] transition-all">
                        {item.name}
                      </li>
                    </Link>
                  </>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="hidden sm:block md:block lg:block sm:z-10 md:z-10 lg:z-10">
          <button type="button" onClick={() => handleChangeBurger()}>
            {isOpen ? (
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={30}
              >
                <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
              </svg>
            ) : (
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={30}
              >
                <path
                  d="m21 15.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
                  fill-rule="nonzero"
                />
              </svg>
            )}
          </button>
        </div>
        <ul className="flex gap-12 items-center sm:hidden md:hidden lg:hidden">
          {nav.map((item, key) => {
            return (
              <>
                <Link
                  href={
                    `${item.name.toLowerCase()}` +
                    "/" +
                    `${item.name.toLowerCase()}`
                  }
                  key={key}
                  className="sm:text-xl"
                >
                  <li className="font-inter font-bold text-xl text-[#029CF5] hover:text-[#2874a0] transition-all">
                    {item.name}
                  </li>
                </Link>
              </>
            );
          })}
        </ul>
      </motion.div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </motion.div>
  );
};

export default Header;
