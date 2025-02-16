import "./App.css";
import { LandingPage, CustomQuiz, QuizPage } from "./components/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "add-quiz", element: <CustomQuiz /> },
  { path: "quiz-game", element: <QuizPage /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LandingPage />}></Route>
          <Route path="add-quiz" element={<CustomQuiz />}></Route>
          <Route path="quiz-game" element={<QuizPage />}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <LandingPage /> */}
      {/* <CustomQuiz /> */}
      {/* <QuizPage /> */}
    </>
  );
}

export default App;
