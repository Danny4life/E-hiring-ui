import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupSelect from "../pages/landing-page/SignupSelect";
const LoginPage = () => {
  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <>
      <div className=" m-auto">
        {signUp && <SignupSelect />}
        <LoginForm handleSignUp={handleSignUp} />
      </div>
    </>
  );
};

export default LoginPage;
