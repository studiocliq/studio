import React, { useEffect } from 'react';
import Head from 'next/head';

// MDX
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote';

// Styles
import Prism from 'prismjs';
import BlogLayout from '../../templates/BlogLayout';
import 'prismjs/themes/prism-okaidia.css';

// Utils
import { getAllBlogPostPid, getPostDataByPid } from 'src/utils/posts';

type Props = {
  data: {
    pid: string;
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      featuredImage: string[];
    }
    content: MDXRemoteSerializeResult;
  }
}

function PostPage({ data }: Props) {
  const { frontmatter, content } = data;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>        
      </Head>
      <BlogLayout
        title={frontmatter.title}
        date={frontmatter.date}
      >
        <MDXRemote {...content} />
      </BlogLayout>
    </>
  )
}

export async function getStaticProps({ params }: {
  params: {
    pid: string;
  }
}) {
  const postData = await getPostDataByPid(params.pid);
  const content = await serialize(postData.content);

  return ({
    props: {
      data: {
        ...postData,
        content,
      },
    },
  });
}

export async function getStaticPaths() {
  const paths = getAllBlogPostPid();

  return ({
    paths,
    fallback: false,
  });
}

export default PostPage;
