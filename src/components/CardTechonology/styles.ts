import styled from "styled-components";
type Cardprop = {
  isActive?: boolean;
  //   name?: string;
};

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5rem;
  width: 100%;
  padding-left: 16rem;

  & > nav {
    order: 1;
  }
  & > div {
    order: 2;
  }
  & > img {
    order: 3;
  }

  @media (max-width: 1024px) and (min-width: 610px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;

    & > nav {
      order: 2;
    }
    & > div {
      order: 3;
    }
    & > img {
      order: 1;
    }
  }

  @media screen and (max-width: 609px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;

    & > img {
      order: 1;
    }
    & > nav {
      order: 2;
    }
    & > div {
      order: 3;
    }
  }

  /* @media (max-width: 767px) and (min-width: 364px) {
    display: block;
    padding: 0;
  } */
`;

export const ContainerDetails = styled.div`
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  height: 100%;

  @media screen and (max-width: 609px) {
    padding: 0 1rem;
  }
`;

export const Pagination = styled.button<Cardprop>`
  background-color: red;
  width: 5rem;
  height: 5rem;
  font-family: var(--font-bellefair);
  font-weight: 200;
  font-size: 2rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? "var(--white)" : "var(--blue-900)"};
  color: ${({ isActive }) => (isActive ? "var(--blue-900)" : "var(--white)")};
  border: ${({ isActive }) => (isActive ? "none" : "2px solid var(--white)")};

  @media screen and (max-width: 609px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const Navegation = styled.nav`
  display: flex;
  align-self: center;
  flex-direction: column;

  gap: 2rem;

  @media (max-width: 1024px) and (min-width: 610px) {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  @media screen and (max-width: 609px) {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const Terminology = styled.h2`
  font-family: var(--font-Bellefair);
  font-weight: 200;
  font-size: 2rem;
  color: #a0a0a0;

  @media (max-width: 1024px) and (min-width: 610px) {
    text-align: center;
  }

  @media screen and (max-width: 609px) {
    font-size: 1.2rem;
  }
`;

export const Name = styled.h1`
  font-family: var(--font-Bellefair);
  font-weight: 200;
  font-size: 3.5rem;
  color: var(--white);

  @media (max-width: 1024px) and (min-width: 610px) {
    text-align: center;
  }

  @media screen and (max-width: 609px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  max-width: 30.7rem;
  width: 100%;
  font-family: var(--font-body);
  font-weight: 100;
  font-size: 1.5rem;
  color: var(--blue-300);

  @media (max-width: 1024px) and (min-width: 610px) {
    text-align: center;
    max-width: 32rem;
  }
  @media screen and (max-width: 609px) {
    max-width: 20rem;
    font-size: 1rem;
  }
`;

export const ImageTechnology = styled.img`
  width: 35rem;
  height: 38rem;
  margin-left: auto;
  align-self: flex-end;

  @media (max-width: 1024px) and (min-width: 610px) {
    margin-left: 0;
    align-self: center;
    margin-top: 2rem;
  }

  @media screen and (max-width: 609px) {
    width: 80%;
    height: 25rem;

    margin-left: 0;
    align-self: center;
  }
`;
