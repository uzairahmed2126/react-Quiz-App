import React, { useEffect, useState } from "react";
import useQuizData from "../../hooks/useQuizData";
import "../QuizPage/style.css";
import { Link } from "react-router";
function Score({ score }) {
  let color = "";
  score <= 30 ? (color = "text-red-500") : (color = "text-green-500");
  return (
    <div>
      <Link
        to="/"
        className="flex absolute top-[10%] left-[80%] text-6xl text-gray-500 hover:text-gray-600"
      >
        <i className="fa fa-close"></i>
      </Link>
      <h1
        className={`text-center m-60 text-8xl place-content-center items-center ${color}`}
      >
        Score :{score}
      </h1>
    </div>
  );
}
function QuizPage() {
  let questionsLimit = 10;
  const [index, setIndex] = useState(0);
  const { quizData, error } = useQuizData(questionsLimit);
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);
  if (error) return <p>Error: {error}</p>;
  if (quizData.length === 0)
    return <p className="text-center m-20 text-6xl">Loading...</p>;
  let arr = ["a", "b", "c", "d"];
  function handleQuestionOpt(event) {
    let previousElement = event.target.previousElementSibling;
    let selectedAnswer = previousElement.innerText
      .trim()
      .toLowerCase(previousElement);
    let correctKey = `answer_${selectedAnswer}_correct`;
    let isCorrect = quizData[index].correct_answers[correctKey] === "true";
    if (isCorrect) {
      setScore((prevScore) => prevScore + 10);
    }
    setIndex((prevIndex) => prevIndex + 1);
    setCount((prevCount) => prevCount + 1);
  }
  if (count > questionsLimit) {
    return <Score score={score} />;
  }
  return (
    <React.Fragment>
      <div className="quiz-container">
        <div
          id="question-container"
          onClick={handleQuestionOpt}
          className="pointer-events-none"
        >
          <div id="question-number">
            <h4>
              {count}/{quizData.length}
            </h4>
          </div>
          <p className="question">{quizData[index].question}</p>
          <div id="questions">
            {arr.map((item, ind) => {
              return (
                <div key={ind} className="  question-container">
                  <div className="inner-question-container">
                    <p className="option">{item}</p>
                    <p className={`question-p pointer-events-auto`}>
                      {quizData[index].answers["answer_" + item]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default QuizPage;
