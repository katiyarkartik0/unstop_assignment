import useDeviceDetect from "utils/useDeviceDetect";

import SideDrawerTile from "components/sideDrawerTile/SideDrawerTile";

import DashboardImage from "icons/dashboard.svg";
import Assesment from "icons/note_alt.svg";
import MyLibrary from "icons/quiz.svg";
import RoundStatus from "icons/admin_meds.svg";
import Cut from "icons/cut.svg";

import "./SideDrawer.css";

const SideDrawer = ({ toggleSideDrawer, showSideDrawer }) => {
  const [isMobileView] = useDeviceDetect(window.innerWidth);
  return (
    <>
      {
        <div
          className={`sideDrawer${isMobileView ? "-mobile" : ""}${
            showSideDrawer ? "" : "-hide"
          }`}
        >
          {isMobileView ? (
            <div className="sideDrawer-header">
              <div>Menu</div>
              <div onClick={toggleSideDrawer} className="closeButton">
                <img src={Cut}></img>
              </div>
            </div>
          ) : (
            ""
          )}
          <SideDrawerTile text="Dashboard" icon={DashboardImage} />
          <SideDrawerTile
            text="Assesment"
            icon={Assesment}
            customClass="activeAssessment"
          />
          <SideDrawerTile text="My library" icon={MyLibrary} />
          <div className="divider" />
          <SideDrawerTile
            watermark={<div className={`admin${isMobileView?"-mobile":""}`}>Admin</div>}
            text="Round Status"
            icon={RoundStatus}
          />
        </div>
      }
    </>
  );
};

export default SideDrawer;
