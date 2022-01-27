import React from "react";
import "./ClothBody.scss";
import MultiCards from "./Cards/MultiCards";
import MultiCards2 from "./Cards2/MultiCards2";
import MultiCards3 from "./Cards3/MultiCards3";

const ClothBody = (multi) => {
  return (
    <>
      <div className="ClothBody">
        <MultiCards />
        <MultiCards2 />
        <MultiCards3 />
        <MultiCards />
        <MultiCards3 />
        <MultiCards2 />
      </div>
    </>
  );
};

export default ClothBody;
