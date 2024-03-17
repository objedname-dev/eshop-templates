import type { Meta, StoryObj } from 'storybook-solidjs';

import { MapLegend } from '@/components/MapLegend';

const meta = {
  title: 'Components/Contact/Map Legend',
  component: MapLegend,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MapLegend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    areas: [
      {
        color: '#ff0000',
        label: '29 Kč, min. obj. 100 Kč, Zdarma od 300Kč',
        type: 'fixed',
      },
      {
        color: '#4b00fa',
        label: '59 Kč, min. obj. 200 Kč, Zdarma od 500Kč',
        type: 'fixed',
      },
      { color: '#000000', label: 'Oblast nerozvážíme', type: 'free' },
    ],
  },
};
