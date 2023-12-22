import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobSeekerSignUpForm from "./components/authentication/JobSeekerSignUpForm";
//import LoginForm from "./components/authentication/LoginForm";
//import { useState } from "react";
import LandingPage from "./components/pages/landing-page/LandingPage";
import LoginPage from "./components/authentication/LoginPage";

function App() {


//const [user, setUser] = useState();

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/job-seeker-signup" element={<JobSeekerSignUpForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
