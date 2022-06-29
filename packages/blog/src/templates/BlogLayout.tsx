import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import DefaultLayout from './DefaultLayout';

import 'prismjs/themes/prism-tomorrow.css';

const PostWrapper = styled.main`
  max-width: 620px;
  padding: 6rem 0;
  margin: 0 auto;

  p {
    line-height: 2;
    word-break: break-all;
    margin-bottom: 2rem;
  }

  strong {
    font-weight: 700; 
  }

  ul, ol {
    margin-bottom: 2rem;
  }

  ul {
    list-style: circle outside;
    margin-left: 20px;
  }

  ol {
    list-style: number outside;
    margin-left: 20px;
  }

  li {
    margin-bottom: 1.375rem;
    line-height: 1.8;
    list-style-position: outside;
  }

  a {
    color: #ef2c5a;

    &:hover {
      text-decoration: underline;
    }
  }

  br {
    width: 0;
    height: 1.375rem;
  }

  h1 {
    color: #292929;
    font-size: 1.625rem;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.5;
  }

  h2 {
    line-height: 1.3;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h3 {
    line-height: 1.8;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  hr {
    height: 1px;
    background-color: rgba(0, 0, 0, .12);
    border: none;
  }

  code:not([class]) {
    display: inline-block;

    padding: .1rem .3rem;
    margin: 0 .1rem;
    font-size: .8rem;

    line-height: 1.2;
    font-weight: 500;
    border-radius: 3px;
    background-color: rgba(239, 44, 90, .06);
    color: rgb(212, 44, 90);
  }
`;

const PostHeader = styled.header`
  margin-bottom: 40px;
`;

const Date = styled.span`
  color: #292929;
  font-weight: 400;
  font-size: .8rem;
  display: block;
`;

type Props = {
  children: JSX.Element;
  title: string;
  date: string;
};

function BlogLayout({ children, title, date }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <DefaultLayout>
        <PostWrapper>
          <PostHeader>
            <Date>{date}</Date>
            <h1>{title}</h1>
            <hr />
          </PostHeader>
          { children }
        </PostWrapper>
      </DefaultLayout>
    </>
  )
}

export default BlogLayout;
