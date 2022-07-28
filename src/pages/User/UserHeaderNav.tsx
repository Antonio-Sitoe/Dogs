import React from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import MyPhotos from "../../assets/feed.svg";
import StatsSvg from "../../assets/estatisticas.svg";
import AddSvg from "../../assets/adicionar.svg";
import ExitSvg from "../../assets/sair.svg";
import { UserHeaderNavCss } from './style';



function UserHeaderNav() {
  const [mobile, setMobile] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);

  function handleLogout() {
    userLogout();
  }
  return (
    <UserHeaderNavCss>
      <NavLink to="/conta" end>
        <img src={MyPhotos} alt="Minhas fotos" />
        {mobile && "Minhas fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={StatsSvg} alt="Estatisticas das fotos" />
        {mobile && "Estatisticas"}
      </NavLink>
      <NavLink to="/conta/posta">
        <img src={AddSvg} alt="Adicionar Fotos" />
        {mobile && "Adicionar Fotos"}
      </NavLink>
      <button onClick={handleLogout}>
        <img src={ExitSvg} alt="Sair" />
        {mobile && "Sair"}
      </button>
    </UserHeaderNavCss>
  );
}

export default UserHeaderNav;
