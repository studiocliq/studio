import React, { useState, useEffect } from 'react';
import styled, { css, CSSProperties } from 'styled-components';
import { Link } from 'gatsby';

import { ModalNavigationDrawer } from '@studio-cliq/monte';
import useToggle from 'components/Organisms/Header/useToggle';

import Logo from 'images/logo.png';
import MenuIcon from 'images/icons/menu.svg';

const Wrap = styled.div<{ yPosition: number }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 75px;
  background-color: #fff;

  transition: .3s;

  ${({ yPosition }) => yPosition && css`
    box-shadow: 0 0 15px rgba(0, 0, 0, .08);
  `};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 60px 15px 45px;
  max-width: 1180px;
  height: 100%;
  margin: 0 auto;
`;

const logoStyle: CSSProperties = {
  height: '30px',
}

const logoImageStyle: CSSProperties = {
  objectFit: 'contain',
  height: '100%',
}

function Header() {
  const [toggle, changeToggle] = useToggle();
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Wrap yPosition={scrollPosition}>
        <Container>
          <img src={MenuIcon} alt="menu icon" onClick={changeToggle} />
          <Link
            to="/"
            style={logoStyle}>
            <img
              src={Logo}
              alt="studio cliq logo"
              style={logoImageStyle}
            />
          </Link>
          <div> search icon</div>
        </Container>
      </Wrap>
      <ModalNavigationDrawer close={changeToggle} isOpen={toggle} />
    </>
  );
}

export default Header;
