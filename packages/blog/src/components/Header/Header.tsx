import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import useToggle from './useToggle';
import Sidebar from './Sidebar';

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
  box-sizing: border-box;

  padding: 15px 60px 15px 45px;
  max-width: 1180px;
  height: 100%;
  margin: 0 auto;
`;

const Empty = styled.div`
  height: 24px;
  width: 24px;
`;

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
          <Image src="/images/icons/menu.svg" alt="menu icon" onClick={changeToggle} width="24px" height="24px" />
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                alt="studio cliq logo"
                width="147px"
                height="30px"
              />
            </a>
          </Link>
          <Empty />
        </Container>
      </Wrap>
      <Sidebar
        close={changeToggle}
        isOpen={toggle}
      />
    </>
  );
}

export default Header;
