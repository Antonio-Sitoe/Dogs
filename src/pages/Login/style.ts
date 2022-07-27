import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginBackground from "../../assets/login.jpg";

export const LoginCss = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: "";
    display: block;
    background: url(${LoginBackground}) no-repeat center center;
    background-size: cover;
  }

  .forms {
    max-width: 30rem;
    padding: 2rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
    .forms {
      max-width: 100%;
      padding: 1rem;
    }
  }
`;

export const LoginForms = styled.form`
  margin-bottom: 2rem;
`;
export const LinkLosthref = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;
export const Register = styled.div`
  margin-top: 4rem;

  p {
    margin: 2rem 0;
  }

  h2 {
    line-height: 1;
    font-size: 2rem;
    font-family: var(--type-second);
    &::after {
      content: "";
      display: block;
      background: #ddd;
      height: 0.5rem;
      width: 3rem;
    }
  }

  a {
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: #fb1;
    color: #764701;
    box-sizing: border-box;
    padding: 0.8rem 1.2rem;
    transition: 0.2s;
    min-width: 8rem;

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }

    &:disabled {
      opacity: 0.5;
      cursor: wait;
    }
  }
`;
