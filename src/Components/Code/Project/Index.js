import React from "react";
import Header from "./Header/Header";
import HomeImage from "./Home/HomeImage/HomeImage";
import Products from "./Home/Products/Products";
import Footer from "./Footer/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <HomeImage />
      <Products />
      <Footer />
    </>
  );
};
export default Index;



export {default as Header} from "./Header"
