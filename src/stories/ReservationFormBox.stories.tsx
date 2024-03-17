import type { Meta, StoryObj } from 'storybook-solidjs';

import { ReservationFormBox } from '@/components/ReservationFormBox';

const meta = {
  title: 'Components/Reservations/Form',
  component: ReservationFormBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ReservationFormBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
