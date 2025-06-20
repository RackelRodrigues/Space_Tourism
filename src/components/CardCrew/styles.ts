import styled from "styled-components";
type Cardprop = {
  isActive?: boolean;
  name?: string;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-height: 76vh;
  padding: 0 15rem;

  .ContainerDetails {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-height: 70vh;
    gap: 0.5rem;
    padding-top: 2rem;
    padding-bottom: 1.5rem;

    @media (max-width: 1024px) and (min-width: 610px) {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      width: 100%;
      padding: 0 0;
    }

    @media screen and (max-width: 609px) {
      max-height: 100%;
      flex-direction: column;
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 609px) {
    padding: 0;
    max-height: 100%;
  }
`;

export const Pagination = styled.div<Cardprop>`
  background-color: red;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? "var(--white)" : "#979797"};
`;

export const Navegation = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: auto;

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
  }

  @media screen and (max-width: 609px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.8rem;
    margin-top: 1rem;
  }
`;

export const NameProfession = styled.h2`
  font-family: var(--font-Bellefair);
  font-weight: 200;
  font-size: 2.5rem;
  color: #a0a0a0;

  @media (max-width: 1024px) and (min-width: 768px) {
    text-align: center;
  }

  @media (max-width: 767px) and (min-width: 364px) {
    flex-direction: column;
  }
`;

export const Name = styled.h1`
  font-family: var(--font-Bellefair);
  font-weight: 200;
  font-size: 3.5rem;
  color: var(--white);

  @media (max-width: 1024px) and (min-width: 768px) {
    text-align: center;
  }
`;

export const Bio = styled.p`
  max-width: 33.7rem;
  width: 100%;
  font-family: var(--font-body);
  font-weight: 100;
  font-size: 1.5rem;
  color: var(--blue-300);

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    width: 100%;
  }
  @media screen and (max-width: 609px) {
    max-width: 22rem;
    font-size: 1rem;
  }
`;

export const ImagePerson = styled.img<Cardprop>`
  width: 100%;
  height: 100%;
  max-width: ${({ name }) =>
    name === "Mark Shuttleworth" ? "35rem" : "35rem"};
  max-height: ${({ name }) =>
    name === "Mark Shuttleworth" ? "35rem" : "40rem"};
  align-self: flex-end;
  @media (max-width: 1180px) {
    align-self: flex-end;
    padding-top: 2rem;
  }
  @media (max-width: 1024px) and (min-width: 610px) {
    max-width: ${({ name }) =>
      name === "Mark Shuttleworth" ? "17rem" : "18.5rem"};
  }
  @media screen and (max-width: 609px) {
    display: flex;
    align-self: center;
    max-width: 15rem;
    padding: 0;
  }
`;
