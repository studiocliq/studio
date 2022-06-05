import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from 'components/Organisms/Header/Header';

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
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
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
