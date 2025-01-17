import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedKeyboardBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedKeyboardBoldIcon',
  component: LabelPairedKeyboardBoldIcon,
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
} satisfies Meta<typeof LabelPairedKeyboardBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedKeyboardBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
