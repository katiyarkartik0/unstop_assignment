import Assessment from "icons/assessment.svg";
import More from "icons/three_dots.svg";
import Calender from "icons/calendar_today.svg";
import Share from "icons/link.svg";

import "./Assesment.css";

const Assesment = () => {
  return (
    <>
      <div className="questionBox">
        <div className="topHeader">
          <img src={Assessment} />
          <img src={More} />
        </div>
        <div className="mathAssessment">Math Assessment</div>
        <div className="dateContainer">
          <span className="job">Job</span>
          <img src={Calender} className="calenderIcon" />
          <span className="date">20 Apr 2023</span>
        </div>
        <div className="divider"></div>
        <div className="moreDetailContainer">
          <div className="testDetail">
            <span>
              <div className="time">00</div>
              <div className="timeHeading">Duration</div>
            </span>
            <span>
              <div className="noOfQues">00</div>
              <div className="quesHeading">Questions</div>
            </span>
          </div>

          <div className="shareContainer">
            <div className="shareTab">
              <img src={Share} />
              <span className="share">Share</span>
            </div>

            <div className="peopleJoinedContainer">
              <div className="firstPerson">LP</div>
              <div className="secondPerson">LP</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assesment;
