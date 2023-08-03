import SideDrawerTile from "../components/sideDrawerTile/SideDrawerTile";
import "./SideDrawer.css";
import DashboardImage from "../icons/dashboard.svg";
import Assesment from "../icons/note_alt.svg";
import MyLibrary from "../icons/quiz.svg";
import RoundStatus from "../icons/admin_meds.svg";


const SideDrawer = ({ isMobileView, toggleSideDrawer, showSideDrawer }) => {
  return (
    <>
      {
        <div className={`sideDrawer`}>
          {isMobileView ? (
            <div>
              <span>Menu</span>
              <span onClick={toggleSideDrawer}>&#9587;</span>
            </div>
          ) : (
            ""
          )}
          <SideDrawerTile text="Dashboard" icon={<img src={DashboardImage} />}/>
          <SideDrawerTile text="Assesment" icon={<img src={Assesment} />} customClass="activeAssessment"/>
          <SideDrawerTile text="My library" icon={<img src={MyLibrary} />}/>
          <div className="divider"/>
          <div className="admin">Admin</div>
          <SideDrawerTile text="Round Status" icon={<img src={RoundStatus} />}/>
        </div>
      }
    </>
  );
};

export default SideDrawer;
