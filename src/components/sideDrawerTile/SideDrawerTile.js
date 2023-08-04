import useDeviceDetect from "utils/useDeviceDetect";

import "./SideDrawerTile.css";

const SideDrawerTile = ({
  icon,
  text,
  customClass = "",
  watermark = <></>,
}) => {
  const [isMobileView] = useDeviceDetect(window.innerWidth);
  return (
    <div
      className={`optionsContainer${
        isMobileView ? "-mobile" : ""
      } ${customClass}`}
    >
      <img src={icon} />
      <p className="sidebarContent">{text}</p>
      {watermark}
    </div>
  );
};

export default SideDrawerTile;
