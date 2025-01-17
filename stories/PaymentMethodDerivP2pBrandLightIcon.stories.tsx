import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDerivP2pBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDerivP2pBrandLightIcon',
  component: PaymentMethodDerivP2pBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDerivP2pBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDerivP2pBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
