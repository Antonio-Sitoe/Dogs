import styled from "styled-components";

export const UserHeaderCss = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  position: relative;
  margin-top: 1rem;
`;
export const UserHeaderNavCss = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    height: 40px;
    width: 40px;
    align-items: center;
    border: 1px solid transparent;
    transition: 0.1s;

    &:hover,
    &:focus {
      background: white;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    }
    &.active {
      background: white;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
    }
  }
`;
