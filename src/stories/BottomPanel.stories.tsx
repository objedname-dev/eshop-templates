import type { Meta, StoryObj } from 'storybook-solidjs';

import { BottomPanel } from '@/components/BottomPanel';

const meta = {
  title: 'Components/Global/Bottom Panel',
  component: BottomPanel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BottomPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showPoints: true,
    pointsCount: 0,
    cartItemsCount: 0,
  },
};
