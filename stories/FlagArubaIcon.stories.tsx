import type { Meta, StoryObj } from '@storybook/react';

import { FlagArubaIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagArubaIcon',
  component: FlagArubaIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FlagArubaIcon>;

export default meta;

type Story = StoryObj<typeof FlagArubaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
