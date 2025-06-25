import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("images/home/background-home-desktop.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1rem 0 0 0;

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    background-image: url("images/home/background-home-tablet.jpg");
    background-position: center;
    background-size: cover;
  }

  @media sreen and (max-width: 609px) {
    background-image: url("images/home/background-home-mobile.jpg");
    background-position: center;
    background-size: cover;
    height: 100%;
    padding: 0 0;
    z-index: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
  position: absolute;
  bottom: 5rem;
  left: 0;
  right: 0;

  @media (max-width: 1024px) and (min-width: 768px) {
    flex-direction: column;
    justify-content: end;
    gap: 1.5rem;
    height: 100%;
    bottom: 0;
    z-index: 1;
    /* padding-top: 2rem; */

    gap: 1rem;
    /* height: 100vh; */
  }
  @media (max-width: 609px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export const Title = styled.h1`
  font-family: var(--font-Bellefair);
  font-weight: 200;
  font-size: 9rem;
  color: var(--white);
  @media (max-width: 1180px) {
    text-align: center;
  }

  @media (max-width: 1024px) and (min-width: 610px) {
    margin: 1rem 0;
    text-align: center;
    font-size: 5rem;
  }

  @media screen and (max-width: 609px) {
    text-align: center;
    font-size: 3rem;
  }
`;
export const Subtitle = styled.h3`
  font-family: var(--font-Barlow);
  font-size: 2rem;
  font-weight: 100;
  color: var(--blue-300);
  @media (max-width: 1180px) {
    text-align: center;
  }
  @media (max-width: 1024px) and (min-width: 610px) {
    margin: 1rem 0;
    text-align: center;
    font-size: 1rem;
  }

  @media screen and (max-width: 609px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  font-family: var(--font-body);
  font-size: 2rem;
  font-weight: 100;
  font-style: thin;
  color: var(--blue-300);
  width: 60rem;

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    text-align: center;
    font-size: 1.2rem;
    width: 35rem;
  }

  @media screen and (max-width: 609px) {
    width: 18rem;
    text-align: center;
    font-size: 0.9rem;
  }
`;

export const ExploreButton = styled.button`
  width: clamp(8rem, 23vw, 18rem);
  height: clamp(8rem, 17vw, 20rem);
  background-color: var(--white);
  color: var(--blue-900);
  font-family: var(--font-Bellefair);
  font-size: 2rem;
  border-radius: 100%;
  cursor: pointer;
  transition: box-shadow 0.7s ease;
  &:hover {
    box-shadow: 0 0 0 3rem rgba(255, 255, 255, 0.2);
    color: var(--blue-900);
  }
  @media (max-width: 1024px) and (min-width: 610px) {
    width: 13rem;
    height: 13rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 609px) {
    width: 9rem;
    height: 9rem;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;
