import styled from "styled-components";

export const NumberTag = styled.span`
  color: var(--Grey);
  font-weight: bold;
  margin-left: 15rem;
  margin-right: 0.5rem;

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 609px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const TagLabel = styled.h2`
  font-family: var(--font-Barlow);
  font-size: 1.7rem;
  font-weight: 200;
  color: var(--white);
  margin-top: 2rem;

  @media screen and (max-width: 1024px) and (min-width: 610px) {
    font-size: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 609px) {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
