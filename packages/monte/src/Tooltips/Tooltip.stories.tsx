import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from './Tooltip';

const TextDiv = styled.div`
  width: 500px;
  height: 400px;

  padding: 0;
  
  box-sizing: border-box;
  background-color: orange;
`;

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const Default = Template.bind({});

Default.args = {
  target: <TextDiv>Hello</TextDiv>,
  children: 'Tooltip Example',
};
