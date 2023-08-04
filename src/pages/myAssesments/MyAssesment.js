import { useEffect, useState } from "react";
import useDeviceDetect from "utils/useDeviceDetect.js";

import Assesment from "components/assesment/Assesment.js";
import Modal from "modal/Modal";

import Agenda from "icons/view_agenda.svg";
import Candidate from "icons/candidates.svg";
import Globe from "icons/globe.svg";
import Purpose from "icons/share.svg";
import AddIcon from "icons/add.svg";
import Search from "icons/search.svg";
import Funnel from "icons/funnel.svg";
import BarChart from "icons/bar_chart.svg";

import "./MyAssesment.css";

const MyAssesment = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobileView] = useDeviceDetect(window.innerWidth);
  const [isOverviewVisible,setIsOverViewVisible] = useState(true)

  useEffect(()=>{
    if(!isMobileView){
      setIsOverViewVisible(true)
    }
  },[isMobileView]);

  const toggleOverview = () =>{
    setIsOverViewVisible((prev)=>!prev)
  }

  const toggleModal = (event) => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      {showModal && <Modal toggleModal={toggleModal} />}
      <div className={`overview${isOverviewVisible?"":"-hide"}`}>
        <div className="assesmentOverview">Assesment overview</div>
        <div className="assignmentListContainer">
          <div className="assesmentContainer">
            <div className="heading"> Total Assessment</div>
            <div className="contentContainer">
              <div className="iconContainer">
                <img src={Agenda} />
              </div>
              <div className="count">34</div>
            </div>
          </div>

          <div className="candidatesContainer">
            <div className="heading"> Candidates</div>
            <div className="contentContainer">
              <img src={Candidate} />

              <div className="totalCandidateDetail">
                <div className="candidateCount">
                  <span className="count">11,145</span>
                  <span className="moreCount">+89</span>
                </div>
                <div className="candidateDetail">Total Candidate</div>
              </div>

              <div className="candidateAttemptedExamDetail ">
                <div className="candidateCount">
                  <span className="count">1,14</span>
                  <span className="moreCount">+89</span>
                </div>
                <div className="candidateDetail">Who Attamped</div>
              </div>
            </div>
          </div>

          <div className="candidatesSourceContainer">
            <div className="heading"> Candidates Source</div>
            <div className="contentContainer">
              <img src={Globe} />

              <div className="totalCandidateDetail">
                <div className="candidateCount">
                  <span className="count">11,000</span>
                  <span className="moreCount">+89</span>
                </div>
                <div className="candidateDetail">E-mail</div>
              </div>

              <div className="totalCandidateDetail">
                <div className="candidateCount">
                  <span className="count">145</span>
                  <span className="moreCount">+89</span>
                </div>
                <div className="candidateDetail">Social Share</div>
              </div>

              <div className="candidateAttemptedExamDetail ">
                <div className="candidateCount">
                  <span className="count">145</span>
                  <span className="moreCount">+89</span>
                </div>
                <div className="candidateDetail">Unique Link</div>
              </div>
            </div>
          </div>

          <div className="totalPurposeContainer">
            <div className="heading"> Total Purpose</div>
            <div className="contentContainer">
              <div className="iconContainer">
                <img src={Purpose} />
              </div>
              <div className="count">34</div>
            </div>
          </div>
        </div>
      </div>
      <div className="assesments">
        <div className="myAssesmentHeaderContainer">
          <div className="myAssessmentHeader">My Assessment</div>
          {isMobileView && (
            <div className="assesmentIconsContainer">
              <div className="assesmentIcon">
                <img src={Search} />
              </div>
              <div className="assesmentIcon">
                <img src={Funnel} />
              </div>
              <div className={`assesmentIcon${isOverviewVisible?"-active":""}`} onClick={toggleOverview}>
                <img src={BarChart} />
              </div>
            </div>
          )}
        </div>
        <div className="questionBank">
          <div
            className="newAssementContainer"
            name="newAssesment"
            onClick={toggleModal}
          >
            <div className="addQuestion">
              <img src={AddIcon} />
            </div>
            <div className="newAssessment">New Assessment</div>
            <div className="newAssessmentContent">
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </div>
          </div>
          <Assesment />
          <Assesment />
          <Assesment />
          <Assesment />
          <Assesment />
          <Assesment />
        </div>
      </div>

      <div className="blankContainer"></div>
    </>
  );
};
export default MyAssesment;
