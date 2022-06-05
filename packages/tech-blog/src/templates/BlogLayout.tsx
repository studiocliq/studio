import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import DefaultLayout from './DefaultLayout';

import Prism from 'prismjs';
import Img, { FluidObject } from 'gatsby-image';

import "prismjs/themes/prism-okaidia.css";

const PostWrapper = styled.main`
  max-width: 620px;
  padding: 6rem 0;
  margin: 0 auto;

  p {
    line-height: 2;
    word-break: keep-all;
    margin-bottom: 2rem;
  }

  strong {
    font-weight: 700; 
  }

  ul, ol {
    margin-bottom: 2rem;
  }

  ul {
    list-style: circle inside;
  }

  ol {
    list-style: number inside;
  }

  li {
    margin-bottom: 1.375rem;
  }

  a {
    color: #ef2c5a;

    &: hover {
      text-decoration: underline;
    }
  }

  pre {
    margin: 1.75rem 0;
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
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .meta-date {
    color: #292929;
    font-weight: 400;
    font-size: .8rem;
    display: block;
  }
  
`;

const ContentWrapper = styled.div`
  margin: 1.875rem 0;
`;

type Props = {
  children: JSX.Element;
  title: string;
  date: string;
  featuredImage: FluidObject;
};

function BlogLayout({ children, title, date, featuredImage }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <DefaultLayout>
        <PostWrapper>
          <h1>{title}</h1>
          <span className="meta-date">{date}</span>
          <Img
            fluid={featuredImage}
            style={
              {
                marginTop: '2rem',
                boxShadow: '0 0px 15px #959595'
              }
            }
          />
          <ContentWrapper>
            { children }
          </ContentWrapper>
        </PostWrapper>
      </DefaultLayout>
    </>
  )
}

export default BlogLayout;
