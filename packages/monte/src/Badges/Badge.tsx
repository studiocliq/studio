import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  display: inline-block;

  height: 24px;
  padding: 6px 8px;
  border-radius: 4px;
  background-color: #ef2c5a;

  font-size: 12px;
  color: #fff;
`;

type Props = {
  text: string;
};

function Badge({ text }: Props) {
  return (
    <Container>
      { text }
    </Container>
  );
}

export default Badge;
