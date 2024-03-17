import type { Meta, StoryObj } from 'storybook-solidjs';

import { NewsColumn } from '@/components/NewsColumn';

const meta = {
  title: 'Components/News/News Column',
  component: NewsColumn,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NewsColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    news: [
      {
        title: 'Test notifikace',
        date: '09:13 09.01.2024',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in corrupti, aperiam nostrum aliquam, animi quam perferendis assumenda consectetur dicta ullam, asperiores nesciunt quidem consequuntur fuga nam. Doloribus, in qui.',
      },
      {
        title: 'Test notifikace 2',
        date: '14:23 07.01.2024',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet expedita quod aliquid reprehenderit placeat suscipit laudantium maxime quia cupiditate error ad, adipisci debitis! Animi eum rerum maiores placeat eius!',
      },
      {
        title: 'Test notifikace 3',
        date: '12:47 04.01.2024',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet expedita quod aliquid reprehenderit placeat suscipit laudantium maxime quia cupiditate error ad, adipisci debitis! Animi eum rerum maiores placeat eius! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe quam assumenda consequuntur quisquam ut sit fuga tempore illum, ipsa, molestiae eum maiores? Ab ratione cum dicta ipsa iste officia.',
      },
    ],
  },
};
