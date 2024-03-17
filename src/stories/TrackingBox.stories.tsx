import type { Meta, StoryObj } from 'storybook-solidjs';

import { OrderStatus, TrackingBox } from '@/components/TrackingBox';

const meta = {
  title: 'Components/Home/Tracking Box',
  component: TrackingBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TrackingBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orders: [
      {
        orderNumber: 'OB00006809',
        status: OrderStatus.NEW,
        statusMessage: 'Čeká na přijetí',
        comment: 'V případě potíží nás kontaktujte telefonicky na: +420 771 145 451',
      },
      {
        orderNumber: 'OB00006809',
        status: OrderStatus.CONFIRMED,
        statusMessage: 'Byla přijata',
        comment: 'V případě potíží nás kontaktujte telefonicky na: +420 771 145 451',
      },
      {
        orderNumber: 'OB00006809',
        status: OrderStatus.CONFIRMED,
        statusMessage: 'Byla přijata',
        comment: 'Byla zapsána na 17.03. 14:30',
      },
      {
        orderNumber: 'OB00006809',
        status: OrderStatus.IN_DELIVERY,
        statusMessage: 'Je doručována. 00:05:12',
        comment: '',
      },
      {
        orderNumber: 'OB00006809',
        status: OrderStatus.IN_DELIVERY,
        statusMessage: 'Je doručována.',
        comment:
          'Časový limit doručení však vypršel. Pokud se řidič do 10 minut nedostaví kontaktujte nás telefonicky na: +420 771 145 451',
      },
      {
        orderNumber: 'OB00006809',
        status: OrderStatus.DELIVERED,
        statusMessage: 'Byla doručena',
        comment: '',
      },
      {
        orderNumber: 'OB00006809',
        status: OrderStatus.CANCELLED,
        statusMessage: 'Byla zrušena',
        comment: 'Důvod zamítnutí: objednávka byla telefonicky zrušena.',
      },
    ],
  },
};
