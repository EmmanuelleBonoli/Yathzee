import { useNavigate } from "react-router-dom";

const BackMenu = () => {
  const navigate = useNavigate()
  function returnMenu() {
    navigate("/")
  }
  return (
    <div className="backMenu">
      <img
        onClick={returnMenu}
        className="formatDice selectedDice"
        src="../images/Menu.png"
      />
    </div>
  );
};

export default BackMenu;
