import React from "react";
import { Header, Announcement, HeroBox, Products } from "../../components";
import { Categories } from "../../components";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import { sliderItems, categories, popularProducts } from "./Data";
const Home = () => {
  return (
    <>
      <Announcement />
      <Header />
      <HeroBox sliderData={sliderItems} />
      <Categories categories={categories} />
      <Products products={popularProducts} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
