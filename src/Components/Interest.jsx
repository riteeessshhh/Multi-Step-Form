import React from "react";
import "./Interest.css";
import { useState } from "react";
import brinstorm from '../assets/brainstorm.png'
import eyes from '../assets/eyes.png'
import increase from '../assets/increase.png'
import worldwide from '../assets/worldwide.png'
import target from '../assets/target.png'
import { useNavigate } from "react-router-dom";
import back from "../assets/back.png"

const Interest = () => {
  
  const [buttonLocked, setButtonLocked] = useState(false);
  const navigate = useNavigate();

  const optionHandler = (event) => {
    
    const parentLabels = document.querySelectorAll('.option-label');
    parentLabels.forEach(label => label.classList.remove('selected'));
  
    const parentLabel = event.target.closest('.option-label');
    parentLabel.classList.add('selected');

    setButtonLocked(true);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Info");
  }

  const prevAction = () => {
    navigate("/");
  }

 
  return (
    <div>
      <div>
        <div className="total">
       
         <div className="percent">
         <div>
         <button className="prev-img" onClick={prevAction}>
         <img src= {back}></img>
         </button>
        </div>
         <div className="percent-complete"></div>

         </div>

          <form onSubmit={handleSubmit}>
            <div className="head">
              <label>Which are you most interested in?</label>
              <p>Choose just one. This will help us get you started (but won't limit your experience).</p>
            </div>

            <div className="options">
              <label className="option-label">
                <input
                  type="checkbox"
                  value="advancementInCareer"
                  onChange={optionHandler}
                ></input>
                <img src={increase}></img>
                <span>
                 Learning specific skills to advance my career
                </span>
              </label>

              <label className="option-label">
                <input
                  type="checkbox"
                  value="exploring"
                  onChange={optionHandler}
                ></input>
                 <img src={worldwide}></img>
                <span>
                 Exploring new topics I'm interested in
                </span>
              </label>

              <label className="option-label">
                <input
                  type="checkbox"
                  value="refreshingMath"
                  onChange={optionHandler}
                ></input>
                 <img src={brinstorm}></img>
                <span>
                Refreshing my math foundations
                </span>
              </label>

              <label className="option-label">
                <input
                  type="checkbox"
                  value="excercisingBrain"
                  onChange={optionHandler}
                ></input>
                <img src={target}></img>
                <span>Excercising my brain to stay sharp</span>
              </label>

              <label className="option-label">
                <input
                  type="checkbox"
                  value="somethingElse"
                  onChange={optionHandler}
                ></input>
                <img src={eyes}></img>
                <span>Something else</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!buttonLocked}
              className={buttonLocked ? "active-button" : "inactive-button"}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Interest;
