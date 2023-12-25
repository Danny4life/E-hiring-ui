import axios from "axios";
import {useEffect, useState} from "react";
import JobSeekerProfile from "../profiles/jobseekerProfile/JobSeekerProfile";
import JobPostSeeMore from "../findjobposts/JobPostSeeMore";
import JobPostForOneCompany from "../findjobposts/JobPostForOneCompany";
import JobPostFullPage from "../findjobposts/JobPostFullPage";
import JobSeekerTopHeader from "../profiles/profileComponents/JobSeekerTopHeader";
import ChatPage from "./ChatPage";

const JobSeekerPage = () => {
  const [dep, setDep] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:8080/job-seeker", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setUserData(response.data.data);
          console.log(response.data.data);
        });
    };

    fetchData();
  }, [dep]);

  const [userData, setUserData] = useState();

  const [page, setPage] = useState("find-jobs");

  const handleFindJobPage = () => {
    setPage("find-jobs");
  };

  const handleProfilePage = () => {
    setPage("jobSeeker-profile");
  };

  const handleSeeMore = () => {
    setPage("find-jobs-see-more");
  };

  const handleFindJobsOneCompany = () => {
    setPage("find-jobs-one-company");
  };

  const handleChatPage = () => {
    setPage("chat");
  };

  return (
    <div className="mb-15">
      <JobSeekerTopHeader
        handleFindJobPage={handleFindJobPage}
        handleProfilePage={handleProfilePage}
        userData={userData}
        handleChat={handleChatPage}
      />

      {page === "find-jobs" && (
        <JobPostFullPage
          handleSeeMore={handleSeeMore}
          handleFindJobsOneCompany={handleFindJobsOneCompany}
          userData={userData}
        />
      )}

      {page === "find-jobs-see-more" && (
        <JobPostSeeMore handleFindJobsOneCompany={handleFindJobsOneCompany} />
      )}
      {page === "find-jobs-one-company" && (
        <JobPostForOneCompany companyName="Decagon Institute" />
      )}
      {page === "jobSeeker-profile" && (
        <JobSeekerProfile
          setDep={() => {
            setDep(!dep);
          }}
          userData={userData}
        />
      )}
      {page === "chat" && <ChatPage />}
    </div>
  );
};

export default JobSeekerPage;
