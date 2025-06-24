import styled from "styled-components";

import tablet from "../../assets/images/crew/background-crew-tablet.jpg";
import desktop from "../../assets/images/crew/background-crew-desktop.jpg";
import mobile from "../../assets/images/crew/background-crew-mobile.jpg";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${desktop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 0;

  @media (max-width: 1024px) and (min-width: 610px) {
    background-image: url(${tablet});
    background-position: center;
    background-size: cover;
    overflow-x: hidden;
    height: 100%;
  }

  @media screen and (max-width: 609px) {
    background-image: url(${mobile});
    background-position: center;
    background-size: cover;
    height: 100%;
    padding: 0;
  }
`;
