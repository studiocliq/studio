import React from 'react';
import styled from 'styled-components';

type Props = {
  src: string;
  alt: string;
}

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #ffffff;
`;

function Icon({ src, alt }: Props) {
  return (
    <Wrap>
      <Image
        src={src}
        alt={alt}
      />
    </Wrap>
  );
}

export default Icon;
