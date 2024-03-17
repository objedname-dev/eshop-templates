import type { Meta, StoryObj } from 'storybook-solidjs';

import { SubmitButton } from '@/components/SubmitButton';

const meta = {
  title: 'Components/Forms/Submit Button',
  component: SubmitButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
