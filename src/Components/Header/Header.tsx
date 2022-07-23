import { Link } from "react-router-dom";

import styled from "styled-components";
import { Dogs } from "../../assets/Dogs";

const HeaderCss = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 100;
  background: white;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled(Link)`
  padding: 0.5rem 0;
`;
const Login = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    margin-left: 0.5rem;
    background: url("../../assets/usuario.svg") no-repeat center center;
    position: relative;
    top: -1px;
  }
`;

function Header() {
  return (
    <HeaderCss>
      <nav className="container">
        <Logo to="/" aria-label="Dogs- Home">
          <Dogs />
        </Logo>

        <Login to="/">Login | Criar</Login>
      </nav>
    </HeaderCss>
  );
}

export default Header;
