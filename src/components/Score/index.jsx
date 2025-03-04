import "../Score/style.css";
import CloseBtn from "../CloseBtn";
function Score({ score }) {
  let color = "";
  score <= 30 ? (color = "text-red-500") : (color = "text-green-500");
  return (
    <div id="score_container">
      <CloseBtn customClass="quiz-page-close-btn" />
      <h1
        id="score_h1"
        className={`text-center m-60 text-8xl place-content-center items-center ${color}`}
      >
        Score :{score}
      </h1>
    </div>
  );
}
export default Score;
