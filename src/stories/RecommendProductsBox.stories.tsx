import type { Meta, StoryObj } from 'storybook-solidjs';

import {
  RecommendProductsBox,
  defaultProducts,
} from '@/components/RecommendProductsBox';

const meta = {
  title: 'Components/Global/Recommended Products',
  component: RecommendProductsBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RecommendProductsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Také doporučujeme:',
    products: defaultProducts,
  },
};
