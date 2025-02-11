import React from "react";
import "../LandingPage/style.css";
function LandingPage() {
  return (
    <div>
      <div id="main-container">
        <h1 className="text-5xl mb-44 text-blue-950 font-bold">
          Welcome to Online Quiz App.
        </h1>
        <div id="inner-container">
          <div id="create-container">
            <button
              id="create"
              title="Add Your own quiz"
              className="landing-btn"
            >
              Add
            </button>
          </div>
          <div id="take-container">
            <button id="take-quiz" className="landing-btn" title="Play Quiz">
              Take A Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
