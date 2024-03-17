import type { Meta, StoryObj } from 'storybook-solidjs';

import { CompanyTerms } from '@/components/CompanyTerms';

const meta = {
  title: 'Components/Company Terms/Company Terms',
  component: CompanyTerms,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CompanyTerms>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    terms:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi tempora possimus aliquid repudiandae assumenda nam dolorum voluptas molestias nisi odio corporis praesentium mollitia laboriosam id saepe, asperiores hic quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti repellat ex iure deserunt fuga possimus eos porro maxime doloremque fugiat veritatis necessitatibus officiis animi assumenda sunt, aperiam qui explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore numquam earum, cumque magnam iusto quis quia, natus deserunt expedita sit iste voluptatum ullam sint ratione, excepturi fugit perferendis accusantium? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ducimus laborum deleniti neque, quas sunt rerum adipisci, eaque repellat minima quo praesentium consequatur quibusdam fugit. Animi ab ea porro minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. \n Hic suscipit blanditiis distinctio soluta doloribus porro culpa? Molestias earum minus praesentium cupiditate ipsa mollitia accusantium? Quaerat soluta distinctio est eos. Eos.',
  },
};
