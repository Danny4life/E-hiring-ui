import { useState } from "react";
import Header from "./Header";
import SignupSelect from "./SignupSelect";
import Section from "./Section";
import KeyFeatures from "./KeyFeatures";
import Possibilities from "./Possibilities";
import WhyChooseUs from "./WhyChooseUs";
import Join from "./Join";
import Footer from "./Footer";

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
        <Section />
        <KeyFeatures />
        <Possibilities />
        <WhyChooseUs />
        <Join />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
