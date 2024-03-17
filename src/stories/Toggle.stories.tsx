import type { Meta, StoryObj } from 'storybook-solidjs';

import { Toggle } from '@/components/Toggle';

const meta = {
  title: 'Components/Global/Toggle',
  render: (props) => {
    return (
      <div class="tw-bg-red tw-h-64">
        <Toggle {...props} />
      </div>
    );
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
  },
};
