import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { NavigationDrawer } from '@studio/monte';

const links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Category',
    link: '/posts'
  },
  {
    name: 'About',
    link: '/about'
  },
];

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;

  gap: 20px;
`;

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  width: 50px;
  height: 50px;

  transition: .3s;

  &:hover {
    background-color: rgba(0, 0, 0, .04);
  }
`;

const iconLinks = [
  {
    url: 'https://github.com/studiocliq',
    src: '/images/icons/github-icon.svg',
    alt: 'github icon'
  },
  {
    url: 'https://www.linkedin.com/in/cliq/',
    src: '/images/icons/linkedin-icon.svg',
    alt: 'linkedin icon'
  }
];

function Head({ close }: {
  close: () => void
}) {
  return (
    <Header>
      <HeadWrap>
        <Link href="/" style={{
            height: '20px',
            paddingLeft: '16px',
          }}
        >
          <a onClick={close}>
            <Image
              src="/images/logo.png"
              alt="studio cliq logo"
              width="98px"
              height="20px"
            />
          </a>
        </Link>
        <CloseButton type="button" onClick={close}>
          <Image
            src="/images/icons/x.svg"
            alt="close icon"
            width={12}
            height={12}
          />
        </CloseButton>
      </HeadWrap>
      <IconWrap>
        {
          iconLinks.map((icon) => (
            <IconLink href={icon.url} target="_blank" rel="noopener noreferrer" key={icon.url}>
              <Image
                src={icon.src}
                alt={icon.alt}
                width={25}
                height={25}
              />
            </IconLink>
          ))
        }
      </IconWrap>
    </Header>
  )
}

const CloseButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
`;

type Props = {
  close: () => void;
  isOpen: boolean;
}

function Sidebar({ close, isOpen }: Props) {
  return (
    <NavigationDrawer
      close={close}
      isOpen={isOpen}
      head={<Head close={close} />}
      links={
        links.map((link) => (
          <Link href={link.link} key={link.link}>
            <a>{link.name}</a>
          </Link>
        ))
      }
    />
  );
}

export default Sidebar;
