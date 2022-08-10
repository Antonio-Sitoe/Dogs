import styled, { keyframes } from "styled-components";
import IceSvg from "../../assets/visualizacao-black.svg";
const ScaleUp = keyframes`
to {
  opacity: initial;
  transform: initial;
}
`;
export const PhotoContentCss = styled.div`
  margin: auto;
  height: 36rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  border-radius: 0.2rem;
  overflow: hidden;
  opacity: 0;
  animation: ${ScaleUp} 0.3s forwards;
  transform: scale(0.8);
  @media (max-width: 64rem) {
    max-height: calc(100vh - 4rem);
    height: auto;
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;

export const PhotoContentPhotoCss = styled.div`
  grid-row: 1 /4;
  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;
export const PhotoContentDetailsCss = styled.div`
  padding: 2rem 2rem 0 2rem;

  .autor {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: underline;
    }

    .visualizacao::before {
      content: "";
      display: inline-block;
      height: 10px;
      width: 16px;
      margin-right: 0.5rem;
      background: url(${IceSvg}) no-repeat;
    }
  }

  ul.attributes {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 2rem;

    li {
      margin-right: 2rem;
      &::before {
        content: "";
        display: inline-block;
        height: 20px;
        margin-right: 0.5rem;
        position: relative;
        top: 3px;
        width: 2px;
        background: #333;
        margin-top: 5px;
      }
    }
  }
`;
export const PhotoCommentsCss = styled.div`
  padding: 0 2rem;
`;
