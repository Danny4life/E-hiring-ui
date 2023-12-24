import axios from "axios";
import {useEffect, useState} from "react";
import FindCandidateFullPage from "../findcandidates/FindCandidateFullPage";
import CreateJobPostPage from "../createjobposts/CreateJobPostPage";
import ChatPage from "../pages/ChatPage";
import EmployerProfile from "../profiles/employerProfile/EmployerProfile";
import EmployerTopHeader from "../profiles/profileComponents/EmployerTopHeader";
const EmployerPage = () => {


    const [userData, setUserData] = useState()
    const [dep, setDep] = useState(false)
    const [jobPosts, setJobPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("http://localhost:8080/employer", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    setUserData(response.data.data);
                    console.log(response.data.data)
                }
            )
        }

        fetchData();
    }, [dep]);


    useEffect(() => {
        const fetchEmployerJobPosts = async () => {
            await axios.get("http://localhost:8080/employer/job-posts", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then(
                response => {
                    setJobPosts(response.data.data);
                    console.log(response.data.data)
                }
            )
        }

        fetchEmployerJobPosts();
    }, []);

    const [page, setPage] = useState("find-candidates")

    const handleFindCandidatePage = () => {
        setPage("find-candidates")
    }

    const handlePostJobPage = () => {
        setPage("post-job")
    }

    const handleProfilePage = () => {
        setPage("employer-profile")
    }

    const handleChatPage = () => {
        setPage("chat")
    }



    return(
        <div className="mb-15">
            <EmployerTopHeader
                handleFindCandidatePage={handleFindCandidatePage}
                handlePostJobPage={handlePostJobPage}
                handleProfilePage={handleProfilePage}
                userData={userData}
                handleChat={handleChatPage}
            />

            { page === "find-candidates" && <FindCandidateFullPage /> }
            { page === "post-job" && <CreateJobPostPage handleFindCandidatesPage={handleFindCandidatePage} /> }
            { page === "employer-profile" && <EmployerProfile setDep={() => {setDep(!dep)}} userData={userData} /> }
            { page === "chat" && <ChatPage/>}
        </div>
    )
}

export default EmployerPage