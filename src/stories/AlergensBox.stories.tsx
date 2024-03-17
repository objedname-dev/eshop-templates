import type { Meta, StoryObj } from 'storybook-solidjs';

import { AlergensBox, defaultAlergens } from '@/components/AlergensBox';

const meta = {
  title: 'Components/Alergens/Alergens List',
  component: AlergensBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AlergensBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alergens: defaultAlergens,
  },
};
