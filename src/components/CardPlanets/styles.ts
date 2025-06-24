import styled from "styled-components";

type Cardprop = {
  isActive?: boolean;
};

export const CardPlanet = styled.div`
  max-height: 45rem;
  max-width: 40rem;
  height: 100%;
  width: 100%;

  @media (max-width: 1024px) and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* 
  @media (max-width: 767px) and (min-width: 364px) {
  } */

  @media screen and (max-width: 609px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 3rem 0;
  .ContainerImages {
    margin-left: 3rem;
    @media screen and (max-width: 609px) {
      margin-left: 0;
      gap: 2rem;
    }
  }

  @media (max-width: 1024px) and (min-width: 610px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 609px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    padding: 0 0.2rem;
  }
`;

export const Navegation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 1024px) and (min-width: 610px) {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }
  @media screen and (max-width: 609px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
  }
`;

export const NameTag = styled.a<Cardprop>`
  cursor: pointer;
  font-family: var(--font-Barlow);
  font-size: 1.3rem;
  color: ${({ isActive }) => (isActive ? "var(--white)" : "var(--blue-300)")};
  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid var(--white)" : "none"};
`;

export const NamePlanet = styled.h1`
  font-family: var(--font-Bellefair);
  font-weight: 200;
  font-size: 8rem;
  color: var(--white);

  @media (max-width: 1024px) and (min-width: 768px) {
    text-align: center;
  }

  @media (max-width: 767px) and (min-width: 364px) {
    display: block;
  }
`;

export const DescriptionPlanet = styled.p`
  width: 28rem;
  font-family: var(--font-body);
  font-weight: 100;
  font-size: 1.5rem;
  color: var(--blue-300);

  @media (max-width: 1024px) and (min-width: 610px) {
    text-align: center;
    width: 32rem;
  }

  @media screen and (max-width: 609px) {
    font-size: 1rem;
    width: 20rem;
  }
`;

export const Information = styled.h5`
  font-family: var(--font-Barlow);
  font-weight: 200;
  font-size: 2rem;
  color: var(--blue-300);
  @media (max-width: 1024px) and (min-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 767px) and (min-width: 364px) {
    font-size: 0.8rem;
  }
`;

export const Numbers = styled.h2`
  font-family: var(--font-Bellefair);
  font-weight: 200;
  font-size: 3rem;
  color: var(--white);

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    font-size: 2rem;
    width: 100%;
  }

  @media sreen and (max-width: 609px) {
    font-size: 2rem;
    width: 100%;
  }
`;

export const Line = styled.hr`
  border: none;
  height: 0.5px;
  background-color: #979797;
  width: 28rem;
  margin: 1rem 0;
  @media (max-width: 1024px) and (min-width: 610px) {
    width: 32rem;
  }

  @media screen and (max-width: 609px) {
    width: 20rem;
    align-self: center;
  }
`;

export const ImagePlanet = styled.img`
  width: 100%;
  height: 100%;
  max-width: 30rem;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    max-width: 18.5rem;
  }
  @media screen and (max-width: 609px) {
    max-width: 17rem;
    padding-bottom: 0.5rem;
  }

  /* @media (max-width: 767px) and (min-width: 374px) {
    max-width: 10rem;
  } */
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 28rem;

  @media (max-width: 1024px) and (min-width: 610px) {
    max-width: 18.5rem;
  }

  @media screen and (max-width: 609px) {
    max-width: 100%;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
