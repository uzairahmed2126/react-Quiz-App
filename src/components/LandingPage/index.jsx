import "../LandingPage/style.css";
import { Link } from "react-router";
function LandingPage() {
  return (
    <div>
      <div id="main-container">
        <h1 className="text-5xl mb-44 text-blue-950 font-bold">
          Welcome to Online Quiz App.
        </h1>
        <div id="inner-container">
          <div id="create-container">
            <Link to="add-quiz">
              <button
                id="create"
                title="Add Your own quiz"
                className="landing-btn pointer-events-auto"
              >
                Add
              </button>
            </Link>
          </div>
          <div id="take-container">
            <Link to="quiz-game">
              <button
                id="take-quiz"
                className="landing-btn pointer-events-auto"
                title="Play Quiz"
              >
                Take A Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
