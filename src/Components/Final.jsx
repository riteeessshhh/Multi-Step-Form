import React from "react";
import "./Final.css";
import Top from "../assets/Top.jpg";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.png"

const Final = () => {
  const navigate = useNavigate();

  const action = (event) => {
    event.preventDefault();
    navigate("/Courses");
  };

  const prevAction = () => {
    navigate("/Mathcheck");
  }

  return (
    <div className="container">
      <div className="percentage-bar">
        <div>
          <button className="prev-img" onClick={prevAction}>
            <img src={back}></img>
          </button>
        </div>
        <div className="percentage-check"></div>
      </div>
      <div className="display">
        <div className="picture">
          <img src={Top}></img>
        </div>
        <div className="writing">
          <h2>You are on your way!</h2>
          <div className="stars">
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
          </div>
          <p>
            "Through it's engaging and well structured courses, Brilliant has
            taught me mathematical concepts that i previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problems solving situations"
          </p>
          <p>~ Jacob S.</p>
        </div>
      </div>
      <button className="final-continue" onClick={action}>
        Continue
      </button>
    </div>
  );
};

export default Final;
