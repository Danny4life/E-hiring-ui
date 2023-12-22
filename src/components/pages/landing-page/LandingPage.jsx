import { useState } from "react";
import Header from "./Header";
import SignupSelect from "./SignupSelect";

const LandingPage = () => {
  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <>
      <div className=" m-auto">
        {signUp && <SignupSelect />}
        <Header handleSignUp={handleSignUp} />
      </div>
    </>
  );
};

export default LandingPage;
