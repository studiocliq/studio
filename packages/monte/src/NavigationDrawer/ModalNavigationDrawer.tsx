import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import Logo from 'images/logo.png';
import Destination from './Destination';

const Container = styled.div<{ hide?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 256px;
  height: 100vh;

  background-color: #fff;
  box-shadow: 2px 0 8px rgba(0, 0, 0, .15);
  overflow: hidden;

  transition: .3s width ease-in-out;

  ${({ hide }) => hide && css`
    width: 0px;
  `};
`;

const Header = styled.div`
  width: 100%;
  height: 74px;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2px 0;
  border-bottom: 1px solid rgb(219, 219, 219);
`;

const Scrim = styled.div<{ hide?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100vw;
  height: 100vh;
  
  background-color: rgba(0, 0, 0, .3);
  transition: .3s;

  ${({ hide }) => hide && css`
    opacity: 0;
    height: 0;
  `};
`;

const XButton = styled.button`
  outline: none;
  border: none;

  width: 23px;
  height: 23px;
  margin-right: 8px;
  background-color: transparent;

  font-size: 18px;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0;

  list-style: none;
`;

type Props = {
  isOpen: boolean;
  close: () => void;
}

const links = [
  {
    name: 'Front',
    link: '/front',
  },
  {
    name: 'Algorhithm',
    link: '/algorhithm',
  },
  {
    name: 'Essay',
    link: '/essay',
  }
];

function ModalNavigationDrawer({ isOpen, close }: Props) {
  return (
    <>
      <Scrim onClick={close} hide={!isOpen} />
      <Container hide={!isOpen}>
        <Header>
          <Link
            to="/"
            style={{
              height: '20px',
              paddingLeft: '16px',
            }}
          >
            <img
              src={Logo}
              alt="studio cliq logo"
              style={{
                objectFit: 'contain',
                height: '100%',
              }}
            />
          </Link>
          <XButton onClick={close}>X</XButton>
        </Header>
        <NavList>
          {
            links.map((item, index) => (
              <li key={item.name}>
                <Destination
                  link={item.link}
                  text={item.name}
                  activated={index === 0}
                />
              </li>
            ))
          }
        </NavList>
      </Container>
    </>
  );
}

export default ModalNavigationDrawer;
