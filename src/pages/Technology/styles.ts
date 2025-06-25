import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("images/technology/background-technology-desktop.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 0;

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    background-image: url("images/technology/background-technology-tablet.jpg");
    background-position: center;
    background-size: cover;
    overflow-x: hidden;
  }

  @media screen and (max-width: 609px) {
    background-image: url("images/technology/background-technology-mobile.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
`;
