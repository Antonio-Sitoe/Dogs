import styled, { createGlobalStyle, keyframes } from "styled-components";

export const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  padding-top: 4rem;
  margin: 0px;
  color: #333;
  --type-first: Helvetica, Arial, sans-serif;
  --type-second: 'Spectral', Georgia;
  font-family: var(--type-first);
}

h1,
h2,
h3,
h4,
p {
  margin: 0px;
}

ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  display: block;
  max-width: 100%;
}

button,
input {
  display: block;
  font-size: 1rem;
  font-family: var(--type-first);
  color: #333;
}

a {
  color: #333;
  text-decoration: none;
}

.container {
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
}

.mainContainer {
  margin-top: 2rem;
}

`;

export const AnimeLeft = styled.section`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;
`;

export const Title = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  margin: 1rem 0;
  position: relative;
  font-size: 3rem;
  text-transform: capitalize;

  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    bottom: 5px;
    position: absolute;
    background: #fb5;
    height: 1.5rem;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;
