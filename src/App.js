import { useEffect, useState } from "react";
import useDeviceDetect from "utils/useDeviceDetect";
import { Route, Routes } from "react-router-dom";

import SideDrawer from "sideDrawer/SideDrawer";
import Navbar from "navbar/Navbar";
import MyAssesment from "pages/myAssesments/MyAssesment";

import "./App.css";

function App() {
  const [isMobileView] = useDeviceDetect(window.innerWidth);
  const [showSideDrawer, setShowSideDrawer] = useState(
    isMobileView ? false : true
  );

  useEffect(() => {
    if (isMobileView) {
      setShowSideDrawer(false);
    } else {
      setShowSideDrawer(true);
    }
  }, [isMobileView]);

  const toggleSideDrawer = () => {
    setShowSideDrawer((prev) => !prev);
  };

  return (
    <div className="appContainer">
      <SideDrawer
        isMobileView={isMobileView}
        toggleSideDrawer={toggleSideDrawer}
        showSideDrawer={showSideDrawer}
      />
      <div className={`pageContent`}>
        <Navbar toggleSideDrawer={toggleSideDrawer} />

        <div className="assignmentContainer">
          <Routes>
            <Route path="/myAssesments" element={<MyAssesment />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
