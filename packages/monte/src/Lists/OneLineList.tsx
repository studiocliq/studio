import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
}

function OneLineList({ text }: Props) {
  return (
    <li>{text}</li>
  );
}

export default OneLineList;
