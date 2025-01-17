import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleEnvelopeBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleEnvelopeBoldIcon',
  component: LabelPairedCircleEnvelopeBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleEnvelopeBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleEnvelopeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
