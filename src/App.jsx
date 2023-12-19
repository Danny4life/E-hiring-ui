import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobSeekerSignUpForm from "./components/authentication/JobSeekerSignUpForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/job-seeker-signup" element={<JobSeekerSignUpForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
