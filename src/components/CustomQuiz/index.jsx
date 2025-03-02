import "../CustomQuiz/style.css";
import CloseBtn from "../CloseBtn/index";
import useQuizData from "../../hooks/useQuizData";
import { useState } from "react";
function CustomQuiz() {
  const { quizData, error } = useQuizData();
  const [questionsLimit, setQuestionLimit] = useState(5);
  let ar = ["a", "b", "c", "d"];

  const question = document.getElementById("get-question");
  const optA = document.getElementById("opt-a");
  const optB = document.getElementById("opt-b");
  const optC = document.getElementById("opt-c");
  const optD = document.getElementById("opt-d");
  const correctOpt = document.getElementById("correct-opt");
  function handleSubmit(e) {
    e.preventDefault();
    let newQuestion = {
      question: question.value,
      answers: {
        answer_a: optA.value,
        answer_b: optB.value,
        answer_c: optC.value,
        answer_d: optD.value,
      },
      correct_answers: {
        answer_a_correct:
          correctOpt.value.toLowerCase() === "a" ? "true" : "false",
        answer_b_correct:
          correctOpt.value.toLowerCase() === "b" ? "true" : "false",
        answer_c_correct:
          correctOpt.value.toLowerCase() === "c" ? "true" : "false",
        answer_d_correct:
          correctOpt.value.toLowerCase() === "d" ? "true" : "false",
      },
    };
    // setQuestionLimit((previouLimit) => previouLimit);
    question.value = "";
    optA.value = "";
    optB.value = "";
    optC.value = "";
    optD.value = "";
    correctOpt.value = "";
    quizData.unshift(newQuestion);
    // session storage
    sessionStorage.setItem("mydata", JSON.stringify(quizData));
  }

  return (
    <div id="add-obj" className="object">
      <CloseBtn customClass="custom-quiz-page-close-btn" />
      <form id="add-obj-form" onSubmit={handleSubmit}>
        <input
          id="get-question"
          type="text"
          placeholder="Enter Question"
          required
        />
        {ar.map((opt, ind) => {
          return (
            <input
              key={opt}
              id={`opt-${opt}`}
              type="text"
              placeholder={`Enter Option ${opt.toUpperCase()}`}
              required
            />
          );
        })}
        <input
          id="correct-opt"
          type="text"
          placeholder="Enter Correct Option a,b,c,d"
          max="1"
          pattern="[A-Za-z]"
          title="Enter only one letter"
          required
        />
        <input id="submit" type="submit" value="Add" />
      </form>
    </div>
  );
}

export default CustomQuiz;
