import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import MyPhotos from "../../assets/feed.svg";
import StatsSvg from "../../assets/estatisticas.svg";
import AddSvg from "../../assets/adicionar.svg";
import ExitSvg from "../../assets/sair.svg";
import { MenuHamburguer, UserHeaderNavCss } from "./style";
import useMedia from "../../Hooks/useMedia";

function UserHeaderNav() {
  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname) {
      setMobileMenu(false);
    }
  }, [pathname]);

  function handleLogout() {
    userLogout();
  }
  return (
    <>
      {mobile && (
        <MenuHamburguer
          aria-label="menu"
          className={mobileMenu ? "active" : ""}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
      <UserHeaderNavCss
        className={`${mobileMenu && "mobileNav"} 
      ${mobile ? "mobile" : "desktop"} `}
      >
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
    </>
  );
}

export default UserHeaderNav;
