import styled from "styled-components";

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
  

`;
