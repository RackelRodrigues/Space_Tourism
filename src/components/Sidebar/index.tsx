import React, { useState } from "react";
import {
  ButtonMenu,
  SidebarContainer,
  ContainerUrl,
  NavLink,
  ContainerButton,
} from "./styles";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

type Title = {
  number: string;
  name: string;
};

interface Props {
  TitlePage?: Title[];
  isMobile?: boolean;
}

export const Sidebar: React.FC<Props> = ({ TitlePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ContainerButton>
        <ButtonMenu onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <RiCloseLargeLine size={30} color="#fff" />
          ) : (
            <RxHamburgerMenu size={30} color="#fff" />
          )}
        </ButtonMenu>
      </ContainerButton>
      <SidebarContainer isActive={isOpen}>
        {isOpen && (
          <div className="ContainerNav">
            {TitlePage?.map((Title) => (
              <ContainerUrl key={Title.number}>
                <strong className="Number">{Title.number}</strong>
                <NavLink
                  href={
                    Title.name.toLowerCase() === "home"
                      ? "/"
                      : `/${Title.name.toLowerCase()}`
                  }
                >
                  {Title.name}
                </NavLink>
              </ContainerUrl>
            ))}
          </div>
        )}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
