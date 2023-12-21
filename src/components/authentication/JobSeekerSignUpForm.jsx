import { Link } from "react-router-dom";
import "../../App.css";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const JobSeekerSignUpForm = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch countries from the endpoint
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Extract country names from the response
        const countryNames = data.map((country) => country.name.common);

        // sort country names alphabetically
        setCountries(countryNames.sort());
      })
      .catch((error) => console.error("Error fetching countries", error));
  }, []);

  //const [clip, setClip] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
              Register as a Job Seeker
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
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  //onChange={handleChange}
                  id="firstName"
                  autoComplete="first-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                 // onChange={handleChange}
                  id="lastName"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                 // onChange={handleChange}
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-1 pass-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                 // value={formData.password}
                 // onChange={handleChange}
                  required
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span
                  className="password-toggle"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-1 pass-input">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                 // value={formData.confirmPassword}
                 // onChange={handleChange}
                  required
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span
                  className="password-toggle"
                  onClick={handleToggleConfirmPassword}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="sm:col-span-full">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="address"
                 // onChange={handleChange}
                  id="address"
                  autoComplete="address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3 sm:col-start-1">
              <label
                htmlFor="tel"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="phoneNumber"
                 // value={formData.phoneNumber}
                 // onChange={handleChange}
                  id="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-1">
                <select
                  id="gender"
                  name="gender"
                  // onChange={handleChange}
                  autoComplete="gender"
                  required
                  className="select-tab block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3 sm:col-start-1">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-1">
                <select
                  id="country"
                  name="country"
                  // value={formData.country}
                  // onChange={handleChange}
                  autoComplete="country-name"
                  required
                  className="select-tab block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="" disabled>
                    {" "}
                    Select a country{" "}
                  </option>

                  {countries.map((country) => (
                    <option
                      key={country}
                      value={country}
                      style={{ backgroundColor: "white" }}
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of birth
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="dateOfBirth"
                  // value={formData.dateOfBirth}
                  //onChange={handleChange}
                  id="date"
                  autoComplete="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <div className="mt-4">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  value="Submit"
                  className="cursor-pointer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div
              className="col-span-full text-center my-3"
              style={{ color: "#98A2B3" }}
            >
              <h3>
                Already have an account?{" "}
                <Link
                  className="cursor-pointer"
                  to="/login"
                  style={{ color: "#2F80ED" }}
                >
                  {" "}
                  Log in here
                </Link>
              </h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobSeekerSignUpForm;
