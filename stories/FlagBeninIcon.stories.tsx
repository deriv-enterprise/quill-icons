import type { Meta, StoryObj } from '@storybook/react';

import { FlagBeninIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagBeninIcon',
  component: FlagBeninIcon,
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
} satisfies Meta<typeof FlagBeninIcon>;

export default meta;

type Story = StoryObj<typeof FlagBeninIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
