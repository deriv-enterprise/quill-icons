import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGearRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGearRegularIcon',
  component: LabelPairedGearRegularIcon,
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
} satisfies Meta<typeof LabelPairedGearRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGearRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
