import { useEffect, useState } from "react";
import useQuizData from "../../hooks/useQuizData";
import "../QuizPage/style.css";
function QuizPage() {
  const [index, setIndex] = useState(0);
  const { quizData, error } = useQuizData(5);
  if (error) return <p>Error: {error}</p>;

  let arr = ["a", "b", "c", "d"];
  if (quizData.length === 0)
    return <p className="text-center m-20 text-6xl">Loading...</p>;
  function handleQuestionOpt() {
    setIndex((prev) => {
      prev + 1;
    });
  }
  return (
    <div className="quiz-container">
      {/* <i className="fa fa-close"></i> */}
      <div id="question-container">
        <div id="question-number">
          <h4>
            {index + 1}/{quizData.length}
          </h4>
        </div>
        <p className="question">{quizData[index].question}</p>
        <div id="questions">
          {arr.map((item, index) => {
            console.log(quizData[index]);
            return (
              <div key={index} className="  question-container">
                <div className="inner-question-container">
                  <p className="option">{item}</p>
                  <p className="question-p" onClick={handleQuestionOpt}>
                    {quizData[index].answers["answer_" + item]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
