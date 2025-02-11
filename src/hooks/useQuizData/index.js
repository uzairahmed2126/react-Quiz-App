import { useEffect, useState } from "react";

async function useQuizData(quizData) {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      fetch(
        `https://quizapi.io/api/v1/questions?apiKey=NFbXqVAcMrioUysvqBpFNWQpdVMNSFS1t1NHTvL6&limit=${limit}`
      )
        .then((res) => res.json())
        .then((res) => setData(res[(quizData, quizData.length)]));
      // const data = await response.json();
      // quizData = [...quizData, ...data];
      // showQuestions(data.length, data);
      if (!response.ok) {
        throw new Error(`HTTP error! Status:${response.status}`);
      }
      return data;
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  });
}
export default useQuizData;
