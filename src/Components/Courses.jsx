import React from "react";
import { useState, useEffect } from "react";
import "./Courses.css";
import course1 from '../assets/Math1.jpg'
import course2 from '../assets/Math2.jpg'

const Courses = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="mainload-div">
          <div className="loading-div"></div>
          <span>
            Finding learning path recommendations for you based on your
            responses
          </span>
        </div>
      ) : (
        <div className="final-output">
          <div className="head-div">
            <h2>Learning path based on your answers</h2>
            <p>Choose one to get started. You can switch anytime.</p>
          </div>
          <div className="popular-div">
              Most popular
            </div>
          <div className="courses-div">
            <div className="first-course">
              <div className="course-text">
                <p><span>Foundational Math </span>Build your foundational skills in algebra, geometry and 
                probability </p>
              </div>
              <div className="course-img">
                <img src = {course1}></img>
              </div>
            </div>
            <div className="second-course">
              <div className="course-text">
                <p><span>Mathematical Thinking </span>Build your foundational skills in algebra, geometry and 
                probability </p>
              </div>
              <div className="course-img">
                <img src= {course2}></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
