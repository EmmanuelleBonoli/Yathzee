import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <div className="formatMenu">
            <NavLink to="/jeu-yathzee">Nouvelle partie</NavLink>
            <NavLink to="/settings">Paramètres</NavLink>
            </div>
        </div>
    );
};

export default Menu;