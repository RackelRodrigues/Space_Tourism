import styled from "styled-components";

interface StyleHeader {
  isActive?: boolean;
  namePage?: string;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .Line {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 767px) and (min-width: 364px) {
    top: 0;
    z-index: 1000;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: normal;
  }
`;

export const BoxHeader = styled.div`
  width: 46rem;
  height: 6rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .Number {
    font-family: var(--font-Barlow);
    color: var(--white);
    font-weight: bold;
    font-size: 1.3rem;
    margin-right: 0.2rem;
  }

  @media (max-width: 1024px) {
    width: 40rem;
    height: 5rem;
  }

  @media (max-width: 609px) {
    display: none;
  }
`;

export const NavLink = styled.a<StyleHeader>`
  font-family: var(--font-Barlow);
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--white);
  cursor: pointer;
  text-decoration: none;
  height: 100%;
`;

export const Logo = styled.img`
  max-width: 3rem;
  max-height: 3rem;
  width: 100%;
  height: 100%;
  margin-left: 2rem;
  @media (max-width: 609px) {
    margin-top: 1rem;
    max-width: 2.5rem;
    max-height: 2.5rem;
  }
`;
export const Line = styled.hr`
  position: fixed;
  left: 15%;
  width: 50%;
  border: none;
  height: 0.5px;
  background-color: #979797;
  margin: 1rem 0;
  z-index: 100;
  @media screen and (min-width: 610px) and (max-width: 1025px) {
    display: none;
  }

  @media (max-width: 609px) {
    display: none;
  }
`;
