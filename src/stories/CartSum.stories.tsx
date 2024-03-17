import type { Meta, StoryObj } from 'storybook-solidjs';

import { CartSum } from '@/components/CartSum';

const meta = {
  title: 'Components/Cart/Summary',
  component: CartSum,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CartSum>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Step1: Story = {
  args: {
    nextBtnText: 'Pokračovat',
    totalPrice: '120 Kč',
    bonusPoints: 21,
  },
};

export const Step2: Story = {
  args: {
    nextBtnText: 'Pokračovat',
    totalPrice: '120 Kč',
    showDelivery: true,
    deliveryPrice: '60 Kč',
    extraMessage: 'Nakupte ještě za 236Kč a máte dopravu zdarma',
    bonusPoints: 21,
  },
};

export const Step3: Story = {
  args: {
    nextBtnText: 'Odeslat',
    nextBtnDisabled: true,
    totalPrice: '120 Kč',
    showDelivery: true,
    deliveryPrice: '60 Kč',
    showCoupon: true,
    bonusPoints: 21,
  },
};
