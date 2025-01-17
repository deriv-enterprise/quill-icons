import type { Meta, StoryObj } from '@storybook/react';

import { FlagArmeniaIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagArmeniaIcon',
  component: FlagArmeniaIcon,
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
} satisfies Meta<typeof FlagArmeniaIcon>;

export default meta;

type Story = StoryObj<typeof FlagArmeniaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
