import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MarketTrend from "../components/MarketTrend";
import Features from "../components/Features";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <img src="/bg-hero.png" style={{ position: "absolute", top: "0px", width: "100%", zIndex: "-1" }} />
      <Hero />
      <MarketTrend />
      <Features />
    </>
  );
};

export default Home;
