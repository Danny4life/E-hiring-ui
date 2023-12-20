import { Link } from "react-router-dom";
import "../../App.css";
//import {useState} from "react";

const JobSeekerSignUpForm = () => {
  //const [clip, setClip] = useState(false);

  let googleImg = "src/assets/Google.svg";

  return (
    <div>
      <Link
        to="/"
        className="fixed bg-black top-[3rem] right-[1rem] cursor-pointer hover:bg-blue-500 justify-between 
            items-stretch border-[color:var(--blue-600,#2563EB)] self-stretch flex gap-4 pl-7 pr-3 py-3 rounded-lg border-2 border-solid max-md:pl-5 my-auto max-h-[3rem]"
      >
        <div className="text-white text-base font-medium leading-6 tracking-wide">
          Back to Home
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5062df1f-67ac-469a-801d-d6350c5b260d?"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
      </Link>
      {/* { clip &&
                <ClipLoader color="#36D7B7" loading={true} size={100} className="absolute right-[46.5vw] top-[44vh]" />
            } */}
      <div className={`register-cont ${blur}`}>
        <form className="register-form py-[2rem] my-[3rem]">
          <div>
            <div className="top">
              <div className="logo">
                <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1699463224/SS1_jyhel9.png" />
              </div>
              <h1
                className="text-center font-semibold text-4xl"
                style={{ color: "#044194" }}
              >
                SwiftSelect
              </h1>
            </div>
            <h2 className="text-center font-semibold text-2xl">
              Create a new account
            </h2>
          </div>
          <div className="gateway sm:col-span-full">
            <img src={googleImg} alt="" />
            <h4>Sign up with Google</h4>
          </div>
          <div className="divider">
            <h3 style={{ color: "#98A2B3" }}>OR</h3>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-6 w-[45vw]">
            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-1">
                <input 
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="first-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobSeekerSignUpForm;
