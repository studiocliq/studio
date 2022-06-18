import React from 'react';
import styled, { css } from 'styled-components';

const Anchor = styled.a< { activated?: boolean } >`
  display: flex;
  align-items: center;
  
  height: 46px;
  padding: 5px 30px;
  margin: 8px;
  border-radius: 5px;

  color: #292929;
  font-weight: 400;

  transition: .3s;

  &: hover {
    ${({ activated }) => activated
      ? css`
        background-color: rgba(239, 44, 90, .12);
      `
      : css`
        background-color: rgba(0, 0, 0, .12);
      `};
  };

  ${({ activated }) => activated && css`
    background-color: rgba(239, 44, 90, .12);
    color: #ef2c5a;
  `};
`;

type Props = {
  link: string;
  text: string;
  activated?: boolean;
}

function Destination({ link, text, activated = false}: Props) {
  return (
    <Anchor href={link} activated={activated}>
      { text }
    </Anchor>
  );
}

Destination.defaultProps = {
  activated: false,
};

export default Destination;
