import React, { useState } from "react";
import useQuizData from "../../hooks/useQuizData";
import "../QuizPage/style.css";
import CloseBtn from "../CloseBtn/index";
import Score from "../Score";
function QuizPage() {
  const [index, setIndex] = useState(0);
  const { quizData, length, error } = useQuizData();
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);
  const [second, setSecond] = useState(30);
  const [minute, setMinute] = useState(1);
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
  console.log(length);
  if (count > length) {
    return <Score score={score} />;
  }

  const handleTimer = setTimeout(() => {
    setSecond(second - 1);
    if (second === 0) {
      setMinute(minute - 1);
      setSecond(59);
    }
  }, 1000);
  if (second === 0 && minute === 0) {
    clearTimeout(handleTimer);
    return <Score score={score} />;
  }

  return (
    <React.Fragment>
      <div className="quiz-container">
        <div id="timer">
          {minute}:{second < 10 ? "0" + second : second}
        </div>
        <CloseBtn customClass="quiz-page-close-btn" />
        <div
          id="question-container"
          onClick={handleQuestionOpt}
          className="pointer-events-none"
        >
          <div id="question-number">
            <h4>
              {count}/{length}
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
