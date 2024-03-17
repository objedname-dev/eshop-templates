import type { Meta, StoryObj } from 'storybook-solidjs';

import { ItemReviewsBox } from '@/components/ItemReviewsBox';

const meta = {
  title: 'Components/Item Detail/Reviews',
  component: ItemReviewsBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ItemReviewsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotLoggedIn: Story = {
  args: {
    isLoggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
  },
};
