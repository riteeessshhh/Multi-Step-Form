import React, { useState } from "react";
import "./Mathcheck.css";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.png"

const Mathcheck = () => {
  const [btnLocked, setBtnLocked] = useState(false);
  const navigate = useNavigate();

  const optnHandler = (event) => {
    const parentLabels = document.querySelectorAll(".optionn-label");
    parentLabels.forEach((label) => label.classList.remove("selected"));

    const parentLabel = event.target.closest(".optionn-label");
    parentLabel.classList.add("selected");

    setBtnLocked(true);
  };

  const action = (event) => {
    event.preventDefault();
    navigate("/Final");
  };

  const prevAction = () => {
    navigate("/Info")
  }

  return (
    <div className="mains">
      <div className="percentag">
        <div>
          <button className="prev-img" onClick={prevAction}>
            <img src={back}></img>
          </button>
        </div>
        <div className="percentag-complete"></div>
      </div>
      <form onSubmit={action}>
        <div className="query">
          <h2>What is your Math comfort level?</h2>
          <p>
            Choose the highest level you're confident in - you can always adjust
            later
          </p>
        </div>

        <div className="boxess">
          <div className="boxx">
            <label className="optionn-label">
              <input
                type="checkbox"
                value="introductory"
                onChange={optnHandler}
              />
              <div className="texts">
                <p>5 × 1/2 = ?</p>
                <p>Arithmetic</p>
                <p>
                  <span>Introductory</span>
                </p>
              </div>
            </label>
          </div>
          <div className="boxx">
            <label className="optionn-label">
              <input
                type="checkbox"
                value="foundational"
                onChange={optnHandler}
              />
              <div className="texts">
                <p>3x + 5 = 4</p>
                <p>Basic Algebra</p>
                <p>
                  <span>Foundational</span>
                </p>
              </div>
            </label>
          </div>
          <div className="boxx">
            <label className="optionn-label">
              <input
                type="checkbox"
                value="intermediate"
                onChange={optnHandler}
              />
              <div className="texts">
                <p> x = [-b ± √(b2 - 4ac)]/2a</p>
                <p>Intermediate Algebra</p>
                <p>
                  <span>Intermediate</span>
                </p>
              </div>
            </label>
          </div>
          <div className="boxx">
            <label className="optionn-label">
              <input value="advanced" type="checkbox" onChange={optnHandler} />
              <div className="texts">
                <p>i = 3 ∫ 2 (x+1) dx</p>
                <p>Calculus</p>
                <p>
                  <span>Advanced</span>
                </p>
              </div>
            </label>
          </div>
        </div>
        <button
          className={btnLocked ? "continue-act" : " continue-btn"}
          disabled={!btnLocked}
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Mathcheck;
