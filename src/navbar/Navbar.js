import { NavLink } from "react-router-dom";
import useDeviceDetect from "utils/useDeviceDetect";

import Segment from "icons/segment.svg";

import "./Navbar.css";

const Navbar = ({toggleSideDrawer}) => {
  const [isMobileView] = useDeviceDetect(window.innerWidth);
  return (
    <div className="navbar">
      {isMobileView && (
        <div className="assesmentIconContainer" onClick={toggleSideDrawer}>
          <img src={Segment}></img>
        </div>
      )}
      <span className="assesmentHeading">Assesments</span>
      <NavLink to="/myAssesments" className="renderOption">
        My Assesments
      </NavLink>
      <NavLink to="/unstopAssesments" className="renderOption">
        Unstop Assesments
      </NavLink>
    </div>
  );
};

export default Navbar;
