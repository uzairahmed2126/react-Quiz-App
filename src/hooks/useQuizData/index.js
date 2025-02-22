import { useEffect, useState, useRef, use } from "react";
function useQuizData() {
  let [quizData, setQuizData] = useState([]);
  const [error, setError] = useState(null);
  const effectRef = useRef(false); // Track if effect has run
  let [length, setLength] = useState(0);
  useEffect(() => {
    if (effectRef.current) return; // Prevent second execution in Strict Mode
    effectRef.current = true;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://quizapi.io/api/v1/questions?apiKey=NFbXqVAcMrioUysvqBpFNWQpdVMNSFS1t1NHTvL6&limit=${5}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status:${response.status}`);
        }

        const data = await response.json();
        let myData = JSON.parse(localStorage.getItem("mydata"));
        if (myData) {
          quizData = myData;
          setLength((prevLength) => prevLength + quizData.length);
        }
        setQuizData(data.concat(myData));
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [length]);
  return { quizData, length, error };
}
export default useQuizData;
