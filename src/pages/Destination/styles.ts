import styled from "styled-components";

import tablet from "../../assets/images/destination/background-destination-desktop.jpg";
import desktop from "../../assets/images/destination/background-destination-tablet.jpg";
import mobile from "../../assets/images/destination/background-destination-mobile.jpg";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${desktop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 0;

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    background-image: url(${tablet});
    background-position: center;
    background-size: cover;
    overflow-x: hidden;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 609px) {
    background-image: url(${mobile});
    background-position: center;
    background-size: cover;
    padding-bottom: 2rem;
    height: 100%;
  }
`;
export const Container = styled.div`
  display: flex;
`;
