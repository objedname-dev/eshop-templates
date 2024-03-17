import type { Meta, StoryObj } from 'storybook-solidjs';

import { NewsOverlay } from '@/components/NewsOverlay';

const meta = {
  title: 'Components/News/News Overlay',
  component: NewsOverlay,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NewsOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Test notifikace',
    date: '09:13 09.01.2024',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in corrupti, aperiam nostrum aliquam, animi quam perferendis assumenda consectetur dicta ullam, asperiores nesciunt quidem consequuntur fuga nam. Doloribus, in qui.',
  },
};
