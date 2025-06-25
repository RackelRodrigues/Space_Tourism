import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("images/crew/background-crew-desktop.jpg");
  background-size: cover;
  background-position: center;
  padding: 1rem 0 0 0;

  @media (max-width: 1024px) and (min-width: 610px) {
    background-image: url("images/crew/background-crew-tablet.jpg");
    background-position: center;
    background-size: cover;
    overflow-x: hidden;
    height: 100%;
  }

  @media screen and (max-width: 609px) {
    background-image: url("images/crew/background-crew-mobile.jpg");
    background-position: center;
    background-size: cover;
    height: 100%;
    padding: 0;
  }
`;
