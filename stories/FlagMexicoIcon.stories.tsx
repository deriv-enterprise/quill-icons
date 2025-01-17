import type { Meta, StoryObj } from '@storybook/react';

import { FlagMexicoIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagMexicoIcon',
  component: FlagMexicoIcon,
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
} satisfies Meta<typeof FlagMexicoIcon>;

export default meta;

type Story = StoryObj<typeof FlagMexicoIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
