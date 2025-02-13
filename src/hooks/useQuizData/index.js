import { useEffect, useState, useRef } from "react";
function useQuizData(limit = 5) {
  const [quizData, setQuizData] = useState([]);
  const [error, setError] = useState(null);
  const effectRef = useRef(false); // Track if effect has run

  useEffect(() => {
    if (effectRef.current) return; // Prevent second execution in Strict Mode
    effectRef.current = true;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://quizapi.io/api/v1/questions?apiKey=NFbXqVAcMrioUysvqBpFNWQpdVMNSFS1t1NHTvL6&limit=${limit}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status:${response.status}`);
        }
        const data = await response.json();
        setQuizData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [limit]);
  return { quizData, error };
}
export default useQuizData;