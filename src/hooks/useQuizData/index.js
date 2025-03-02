import { useEffect, useState, useRef, use } from "react";

function useQuizData() {
  const [quizData, setQuizData] = useState([]);
  const [error, setError] = useState(null);
  const effectRef = useRef(false);
  const [length, setLength] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://quizapi.io/api/v1/questions?apiKey=NFbXqVAcMrioUysvqBpFNWQpdVMNSFS1t1NHTvL6&limit=5`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let data = await response.json();
      console.log("Fetched Data:", data);

      let myData = JSON.parse(sessionStorage.getItem("mydata"));

      if (myData) {
        data = myData;
        console.log("Stored Data Length:", myData.length);
        setQuizData(data);
        setLength(data.length);
      } else {
        setQuizData(data);
        setLength(data.length);
        console.log("Error: No saved quiz data found.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (effectRef.current) return; // Prevent second execution in Strict Mode
    effectRef.current = true;

    fetchData();
  }, [length]);

  return { quizData, length, error };
}
export default useQuizData;
