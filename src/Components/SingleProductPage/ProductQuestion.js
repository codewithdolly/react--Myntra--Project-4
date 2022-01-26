import React from "react";
import TextField from "@mui/material/TextField";

function ProductQuestion() {
  return (
    <>
      <div style={{ padding: "3rem" }}>
        <h1>Have a question?</h1>
        <p>Find answers in product info, Q&As, reviews</p>
        <TextField
          sx={{ my: 2 }}
          id="outlined-basic"
          label="Type Your Question OR Keyword Here..."
          variant="outlined"
          fullWidth
        />
      </div>
      <h2>Customer questions & answers</h2>
      <div style={{ margin: "20px" }}>
        <div style={{ display: "flex" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>
            <b>Question: </b>
          </p>
          <p> Tell me the waist size of this material?</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>
            <b>Answere: </b>
          </p>
          <p> waist of this lehenga is arroung 42 inch to 43 inch.</p>
        </div>
      </div>

      <div style={{ margin: "20px" }}>
        <div style={{ display: "flex" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>
            <b>Question: </b>
          </p>
          <p> Do you have original pic for the same? Also what is the material of dupatta n blouse?</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>
            <b>Answere: </b>
          </p>
          <p> this is the original photo shoot and you can see the images of the same on web page, fabric of lehenga , choli and dupatta are all same banarasi silk Jacquard.</p>
        </div>
      </div>

      <div style={{ margin: "20px" }}>
        <div style={{ display: "flex" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>
            <b>Question: </b>
          </p>
          <p> is this xxxl size?</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>
            <b>Answere: </b>
          </p>
          <p> it is free size waist 42 inch</p>
        </div>
      </div>

      <div style={{ margin: "20px" }}>
        <div style={{ display: "flex" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>
            <b>Question: </b>
          </p>
          <p> How much flair it has?</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>
            <b>Answere: </b>
          </p>
          <p> the flair of lehenga is around 2.5 mtr - 2.6 mtr</p>
        </div>
      </div>
    </>
  );
}

export default ProductQuestion;
