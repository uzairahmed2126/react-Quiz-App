import "../CustomQuiz/style.css";
function CustomQuiz() {
  return (
    <div id="add-obj" className="object">
      <form id="add-obj-form">
        <input
          id="get-question"
          type="text"
          placeholder="Enter Question"
          required
        />
        <input id="opt-a" type="text" placeholder="Enter Option A" required />
        <input id="opt-b" type="text" placeholder="Enter Option B" required />
        <input id="opt-c" type="text" placeholder="Enter Option C" required />
        <input id="opt-d" type="text" placeholder="Enter Option D" required />
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
