import React from "react";
import Head from "next/head";
import Main from "../components/Main/Main";
import Tokens from "../components/Tokens/Tokens";
import Auctions from "../components/Auctions/Auctions";
import Collections from "../components/Collections/Collections";
import Marketplace from "../components/Marketplace/Marketplace";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Tea</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Main />
      <Tokens />
      <Auctions />
      <Collections />
      <Marketplace />
      <Footer />
    </>
  );
}
