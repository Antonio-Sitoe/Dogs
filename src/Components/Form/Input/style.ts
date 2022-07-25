import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }
`;

export const InputStyle = styled.input`
  border: 1px solid #eee;
  display: block;
  background: #eee;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.4rem;
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const ErrorInputCss = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
