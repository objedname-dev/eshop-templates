import type { Meta, StoryObj } from 'storybook-solidjs';

import { Textarea } from '@/components/Textarea';

const meta = {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
