import React, { useEffect, useState } from "react";
import { Container, BoxHeader, NavLink, Logo } from "./styles";
import Sidebar from "../Sidebar";
type Title = {
  number: string;
  name: string;
};

interface Props {
  TitlePage?: Title[];
}
const Header: React.FC<Props> = ({ TitlePage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Container>
        <Logo src="/images/shared/logo.svg" alt="logo" />
        {isMobile ? (
          <Sidebar TitlePage={TitlePage} isMobile={isMobile} />
        ) : (
          <div className="Line">
            <BoxHeader>
              {TitlePage?.map((title: Title) => (
                <div key={title.number}>
                  <strong className="Number">{title.number}</strong>
                  <NavLink
                    href={
                      title.name.toLowerCase() === "home"
                        ? "/"
                        : `/${title.name.toLowerCase()}`
                    }
                  >
                    {title.name}
                  </NavLink>
                </div>
              ))}
            </BoxHeader>
          </div>
        )}
      </Container>
    </>
  );
};

export default Header;
