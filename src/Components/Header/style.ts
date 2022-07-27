import { Link } from "react-router-dom";
import User from "../../assets/user.svg";
import styled from "styled-components";

export const HeaderCss = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 100;
  background: white;

  nav {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Logo = styled(Link)`
  padding: 0.5rem 0;
`;
export const LoginLink = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    margin-left: 0.5rem;
    background: url(${User}) no-repeat center center;
    position: relative;
    top: -1px;
  }
`;
