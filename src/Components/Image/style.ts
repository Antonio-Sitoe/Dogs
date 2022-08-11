import styled, { keyframes } from "styled-components";
const SkeletonAnime = keyframes`
  
from {
  background-position: 0px;
}
to {

  background-position: -200px;
}

`;
export const WrapperImage = styled.div`
  display: grid;
`;
export const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${SkeletonAnime} 1.5s infinite linear;
`;
export const Img = styled.img`
  grid-area: 1/1;
  display: block;
  max-width: 100%;
  opacity: 0;
  transition: 0.2s;
`;
