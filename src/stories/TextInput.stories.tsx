import type { Meta, StoryObj } from 'storybook-solidjs';

import { TextInput } from '@/components/TextInput';

const meta = {
  title: 'Components/Forms/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
