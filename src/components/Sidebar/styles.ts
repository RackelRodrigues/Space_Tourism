import styled from "styled-components";
interface SidebarProps {
  isActive?: boolean;
}
export const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? "0" : "-100%")};
  width: 18rem;
  max-width: 25rem;
  min-width: 15rem;
  height: 100vh;
  background: rgba(11, 13, 23, 0.3);

  backdrop-filter: blur(40px);
  padding-left: 2rem;
  transition: right 0.3s ease-in-out;
  z-index: 2;

  .ContainerNav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;
    gap: 2rem;
    z-index: 10;
    background-color: transparent;
  }
`;
export const ContainerUrl = styled.div`
  width: 100%;

  .Number {
    font-family: var(--font-Barlow);
    color: var(--white);
    font-weight: bold;
    font-size: 1.3rem;
    margin-right: 0.2rem;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1rem;
`;

export const NavLink = styled.a`
  font-family: var(--font-Barlow);
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--white);
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  &:hover {
    text-decoration: none;
    border-right: 1px solid #fff;
  }
`;

export const ButtonMenu = styled.button`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  margin-right: 1rem;
  z-index: 1001;
  background-color: transparent;

  @media screen and (min-width: 610px) and (max-width: 1025px) {
    flex-direction: column;
    display: block;
    background-color: transparent;
  }
`;
