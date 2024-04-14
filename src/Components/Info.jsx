import React from "react";
import "./Info.css";
import Right from "../assets/Right.png";
import { useNavigate } from "react-router-dom";
import back from '../assets/back.png'

const Info = () => {
  const navigate = useNavigate();

  const action = () => {
    navigate("/Mathcheck");
  };

  const prevAction = () => {
    navigate("/Interest");
  }

  return (
    <div className="main">
      <div className="percenta">
        <div>
          <button className="prev-img" onClick={prevAction}>
            <img src={back}></img>
          </button>
        </div>
        <div className="percenta-complete"></div>
      </div>
      <div className="image-text">
        <div className="image">
          <img src={Right}></img>
        </div>
        <div className="text">
          <h2>You are in the right place</h2>
          <p>
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You will interact with concepts and solve fun
            problems in math, science and computer science.
          </p>
        </div>
      </div>

      <button onClick={action} className="btn">
        Continue
      </button>
    </div>
  );
};

export default Info;
