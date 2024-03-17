import type { Meta, StoryObj } from 'storybook-solidjs';

import { TextInputField } from '@/components/TextInputField';

const meta = {
  title: 'Components/Forms/Text Input Field',
  component: TextInputField,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TextInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Text field',
  },
};
