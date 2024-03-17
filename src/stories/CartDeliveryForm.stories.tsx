import { ComponentProps } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import { CartDeliveryForm } from '@/components/CartDeliveryForm';

const meta = {
  title: 'Components/Cart/Delivery Form',
  component: CartDeliveryForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    selectedDelivery: { control: 'select', options: ['delivery', 'pickup'] },
    selectedPayment: { control: 'select', options: ['card', 'cash'] },
  },
} satisfies Meta<typeof CartDeliveryForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedDelivery: null,
    selectedPayment: null,
    isLoggedIn: false,
    bonusPointsTotal: 0,
    bonusPointsPaymentTotal: 0,
    bonusPointsMin: 10,
  } satisfies Partial<ComponentProps<typeof CartDeliveryForm>>,
};
