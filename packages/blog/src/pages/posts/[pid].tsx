import Head from 'next/head';
import React from 'react';
import BlogLayout from '../../templates/BlogLayout';
import { getAllBlogPostPaths } from 'src/utils/posts';

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
      }
    }
  }
}

function PostPage({ data }: Props) {
  const { id, slug, body, frontmatter } = data.mdx;

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>        
      </Head>
      <BlogLayout
        title={frontmatter.title}
        date={frontmatter.date}
      >
        { body }
      </BlogLayout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = getAllBlogPostPaths();

  return {
    paths: [
      { params: {
        
      }}
    ],
    fallback: false,
  }
}

export default PostPage;
