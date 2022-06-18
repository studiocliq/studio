import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import Badge from '../Badges';

type Props = {
  title: string;
  description: string;
  tags: string[] | string;
  featuredImage: JSX.Element;
}

const Container = styled.div`
  display: flex;
  gap: 45px;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
  align-items: center;
  padding: 30px;
  transition: .3s cubic-bezier(.155,1.105,.295,1.12);

  position: relative;
  top: 0;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, .08);
    position: relative;
    top: -4px;
    transform: scale(1.02);
  }
`;

const TextBox = styled.div`
  flex-shrink: 1;
`;

const Badges = styled.div`
  display: flex;
  gap: 20px;

  margin-bottom: 15px;
`;

const Title = styled.h3`
  margin-bottom: 14px;

  font-size: 21px;
  line-height: 1.53;
  font-weight: 700;
  color: #212121;
`;

const Description = styled.div`
  font-size: 15px;
  color: #212121;
`;

const ImageWrapper = styled.div`
  width: 170px;
  height: 170px;
  flex-shrink: 0;
`;

function PostCard({ title, description, tags, featuredImage }: Props) {
  return (
    <Container>
      <TextBox>
        <Badges>
          {
            Array.isArray(tags)
              ? (
                tags.map((tag) => <Badge key={tag} text={tag} /> )
              ) : <Badge text={tags} />
          }
        </Badges>
        <Title>{ title }</Title>
        <Description>{description}</Description>
      </TextBox>
      <ImageWrapper>
        { featuredImage }
      </ImageWrapper>
    </Container>
  );
}

export default PostCard;
