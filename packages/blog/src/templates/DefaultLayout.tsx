import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Header from 'components/Header/Header';

type Props = {
  children: JSX.Element;
}

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 75px auto;
  padding: 15px 45px;
`;

function DefaultLayout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <>
        <Header />
        <Wrapper>
          { children }
        </Wrapper>
      </>
    </>
  )
}

export default DefaultLayout;
