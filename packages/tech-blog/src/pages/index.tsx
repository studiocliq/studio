import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

import BlogPostWrapper from 'components/BlogPostWrapper';

import { PostCard } from '@studio-cliq/monte';

import DefaultLayout from '../templates/DefaultLayout';
import { FluidObject } from 'gatsby-image';

const Wrap = styled.div`
  display: flex;

`;

const Main = styled.main`
  width: 100%;
`;

type Props = {
  data: {
    allMdx: {
      nodes: {
        id: string;
        slug: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
          tags: string[];
          featuredImage: {
            childImageSharp: {
              fluid: FluidObject;
            }
          }
        }
      }[]
    }
  }
}

const IndexPage = ({ data }: Props) => {
  return (
    <DefaultLayout>
      <>
        <Wrap>
          <Main>
            <BlogPostWrapper title="Tech">
              {
                data.allMdx.nodes.map((post) => (
                  <Link key={post.id} to={`/posts/${post.slug}`}>
                    <PostCard
                      title={post.frontmatter.title}
                      description={post.frontmatter.description}
                      tags={post.frontmatter.tags}
                      featuredImage={post.frontmatter.featuredImage.childImageSharp.fluid}
                    />
                  </Link>
                ))
              }
            </BlogPostWrapper>
          </Main>
        </Wrap>
      </>
    </DefaultLayout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage
