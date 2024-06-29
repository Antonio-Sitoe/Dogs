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
  &.desktop {
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
  }

  &.mobile {
    display: block;
    position: absolute;
    top: 70px;

    right: 0px;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    a,
    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      width: 100%;
      border-bottom: 1px solid #eee;
      justify-content: space-between;
      padding: 0.5rem 0;
      cursor: pointer;

      &:hover,
      &:focus {
        background: white;
        box-shadow: none;
        border-color: none;
        outline: none;
      }
      &.active {
        background: white;
        box-shadow: none;
        border-bottom-color: #fb1;
      }
    }
    button {
      border-bottom: none;
    }
  }

  &.mobileNav {
    pointer-events: initial;
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
  }
`;

export const MenuHamburguer = styled.button`
  background: #eee;
  padding: 0px;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  height: 40px;
  width: 40px;
  align-items: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &:hover,
  &:focus,
  &.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    outline: none;
    color: #fb1;
  }

  &.active::after {
    content: "";
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }
`;

export const UserPhotoPostCss = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  form {
    input.file {
      margin: 1rem 0;
    }
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;
export const UserPhotoPostPhotoPreviewCss = styled.div<{ img: string }>`
  background-image: url(${({ img }) => img});
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &::after {
    content: "";
    height: 0px;
    padding-bottom: 100%;
    display: block;
  }
`;
