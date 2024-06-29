import React from "react";
import { Dogs } from "../../../public/assets/Dogs";
import { HeaderCss, LoginLink, Logo } from "./style";
import { UserContext } from "../../Contexts/UserContext";

function Header() {
  const { data } = React.useContext(UserContext);
  return (
    <HeaderCss>
      <nav className="container">
        <Logo to="/" aria-label="Dogs- Home">
          <Dogs />
        </Logo>
        {data ? (
          <LoginLink to="/conta">{data?.nome}</LoginLink>
        ) : (
          <LoginLink to="/login"> Login | Criar</LoginLink>
        )}
      </nav>
    </HeaderCss>
  );
}

export default Header;
