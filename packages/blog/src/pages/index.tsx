import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';

import BlogPostWrapper from 'components/BlogPostWrapper';
import { getAllPostMetadata } from 'src/utils/posts';

import { PostCard } from '@studio/monte';

import DefaultLayout from '../templates/DefaultLayout';

const Wrap = styled.div`
  display: flex;

  height: 200vh;
`;

const Main = styled.main`
  width: 100%;
`;

type Props = {
  allPostsData: {
    pid: string;
    title: string;
    data: string;
    description: string;
    tags: string;
    featuredImage: string;
  }[]
};

function IndexPage({ allPostsData }: Props) {
  return (
    <DefaultLayout>
      <Wrap>
        <Main>
          <BlogPostWrapper title="Tech">
            {
              allPostsData.map((post) => (
                <Link key={post.pid} href={`/posts/${post.pid}`}>
                  <a>
                    <PostCard
                      title={post.title}
                      description={post.description}
                      tags={post.tags}
                      featuredImage={
                        <Image
                          src={post.featuredImage}
                          width={170}
                          height={170}
                        />
                      }
                    />
                  </a>
                </Link>
              ))
            }
          </BlogPostWrapper>
        </Main>
      </Wrap>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const allPostsData = getAllPostMetadata();

  return {
    props: {
      allPostsData,
    }
  }
}

export default IndexPage;
