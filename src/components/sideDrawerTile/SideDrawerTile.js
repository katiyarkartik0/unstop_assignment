import "./SideDrawerTile.css";

const SideDrawerTile = ({ icon, text, customClass="" }) => {
  return (
    <div className={`optionsContainer ${customClass}`}>
      {icon}
      <p className="sidebarContent">{text}</p>
    </div>
  );
};

export default SideDrawerTile;
