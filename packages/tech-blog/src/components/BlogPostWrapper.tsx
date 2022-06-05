import React, { Children } from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/title';
import { PostCard } from '@studio-cliq/monte';

type Props = {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

const Container = styled.div`
  padding: 80px 0;
  margin-bottom: 80px; 
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

function BlogPostWrapper({ title, children }: Props) {
  return (
    <Container>
      <SectionTitle>{ title }</SectionTitle>
      <Contents>
        {
          Array.isArray(children)
            ? (
              children.map((Post) => (
                Post
              ))
          ) : children
        }
      </Contents>
    </Container>
  )
}

export default BlogPostWrapper;
