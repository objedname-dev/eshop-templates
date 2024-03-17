import type { Meta, StoryObj } from 'storybook-solidjs';

import { Select } from '@/components/Select';

const meta = {
  title: 'Components/Forms/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </>
    ),
  },
};
