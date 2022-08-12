import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

export const LoadingCss = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  padding-left: 5px;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
`;
