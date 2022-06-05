import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import BlogLayout from '../../templates/BlogLayout';
import { Helmet } from 'react-helmet';
import { FluidObject } from 'gatsby-image';

type Props = {
  data: {
    mdx: {
      id: string;
      slug: string;
      body: string;
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
    }
  }
}

function PostPage({ data }: Props) {
  const { id, slug, body, frontmatter } = data.mdx;
  const featuredImage = frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <>
      <Helmet>
        <title>{frontmatter.title}</title>        
      </Helmet>
      <BlogLayout
        title={frontmatter.title}
        date={frontmatter.date}
        featuredImage={featuredImage}
      >
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </BlogLayout>
    </>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
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
      body
    }
  }
`;

export default PostPage;
