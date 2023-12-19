import { Link } from "react-router-dom";
import "../../App.css"


const JobSeekerSignUpForm = () => {
  return (
          <div>
            <Link to="/" className="">
              <div className="home">Back to Home</div>
            </Link>
            <div>
              <form className="py-[2rem] my-[3rem]">
                <div className="top">
                  <div className="logo">
                    <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1699463224/SS1_jyhel9.png" className="w-[4.5rem]" />
                  </div>
                  <h1 className="text-center font-semibold text-4xl" style={{color: "#044194"}}
                  >
                    SwiftSelect
                  </h1>
                </div>
              </form>
            </div>
          </div>
        );
};

export default JobSeekerSignUpForm;
