import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/destination/background-destination-desktop.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 0;

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    background-image: url("images/destination/background-destination-tablet.jpg");
    background-position: center;
    background-size: cover;
    overflow-x: hidden;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 609px) {
    background-image: url("images/destination/background-destination-mobile.jpg");
    background-position: center;
    background-size: cover;
    padding-bottom: 2rem;
    height: 100%;
  }
`;
export const Container = styled.div`
  display: flex;
`;
