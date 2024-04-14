import React, { useState } from "react";
import "./Description.css";
import Student from "../assets/student.png";
import Professional from "../assets/professionals.png";
import Teacher from "../assets/teacher.png";
import LifelongLearner from "../assets/laptop.png";
import Other from "../assets/boy.png";
import Parent from "../assets/family.png";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const [buttonLocked, setButtonLocked] = useState(false);
  const navigate = useNavigate();

  const optionHandler = (event) => {
    const parentLabels = document.querySelectorAll(".optionss-label");
    parentLabels.forEach((label) => label.classList.remove("selected"));

    const parentLabel = event.target.closest(".optionss-label");
    parentLabel.classList.add("selected");

    setButtonLocked(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Interest");
  };

  return (
    <div>
      <div className="biggest">
        <div className="percentage">
          <div className="percentage-complete"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="headder">
            <label>Which describes you best?</label>
            <p>This will help us personalize your experience.</p>
          </div>

          <div className="optionss">
            <label className="optionss-label">
              <input
                type="checkbox"
                value="student"
                onChange={optionHandler}
              ></input>
              <img src={Student}></img>
              <span>
                Student <span>or soon to be enrolled</span>
              </span>
            </label>

            <label className="optionss-label">
              <input
                type="checkbox"
                value="professional"
                onChange={optionHandler}
              ></input>
              <img src={Professional}></img>
              <span>
                Professional <span> pursuing a career</span>
              </span>
            </label>

            <label className="optionss-label">
              <input
                type="checkbox"
                value="parent"
                onChange={optionHandler}
              ></input>
              <img src={Parent}></img>
              <span>
                Parent <span>of a school age child</span>
              </span>
            </label>

            <label className="optionss-label">
              <input
                type="checkbox"
                value="LifelongLearner"
                onChange={optionHandler}
              ></input>
              <img src={LifelongLearner}></img>
              <span>Lifelong Learner</span>
            </label>

            <label className="optionss-label">
              <input
                type="checkbox"
                value="Teacher"
                onChange={optionHandler}
              ></input>
              <img src={Teacher}></img>
              <span>Teacher</span>
            </label>

            <label className="optionss-label">
              <input
                type="checkbox"
                value="Other"
                onChange={optionHandler}
              ></input>
              <img src={Other}></img>
              <span>Other</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!buttonLocked}
            className={buttonLocked ? "activated-button" : "inactivated-button"}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Description;
