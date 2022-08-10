import styled from "styled-components";
import IceSvg from "../../assets/visualizacao.svg";

export const FeedModalCss = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  display: flex;
  z-index: 1000;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  @media (max-width: 40rem) {
    padding: 2rem calc(2rem+15px) 2rem 2rem;
  }
`;

export const FeedPhotoCss = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1rem;
  justify-items: center;
  gap: 1rem;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeedPhotoItemCss = styled.li`
  display: grid;
  overflow: hidden;
  cursor: pointer;
  border-radius: 0.2rem;

  img {
    grid-area: 1/1;
  }
  span {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    display: none;
    grid-area: 1/1;

    &::before {
      content: "";
      width: 16px;
      height: 10px;
      display: inline-block;
      margin-right: 0.25rem;
      background: url(${IceSvg}) no-repeat;
    }
  }

  &:hover span {
    display: flex;
  }

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
    @media (max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;
