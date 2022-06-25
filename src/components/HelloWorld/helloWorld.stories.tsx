import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HelloWorld, { HelloWorldProps } from './helloWorld';

export default {
  title: 'Component/HelloWorld',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = (
  args: JSX.IntrinsicAttributes & HelloWorldProps
) => (
  <div>
    <HelloWorld {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Hello World Story',
};
