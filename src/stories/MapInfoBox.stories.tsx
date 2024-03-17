import type { Meta, StoryObj } from 'storybook-solidjs';

import { MapInfoBox } from '@/components/MapInfoBox';

const meta = {
  title: 'Components/Contact/Map Info Box',
  component: MapInfoBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MapInfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: 'https://objedname.eu/user-data/factories/80/imgs/map_photo.jpg',
    name: 'Restaurace Objednáme',
    address: 'Hlavní 11, Ostrava 12300',
    phone: '+420 771 145 451',
    businessHours: [
      {
        title: 'Pondělí - Pátek',
        timeFrom: '11:00',
        timeTo: '21:00',
      },
      {
        title: 'Sobota',
        timeFrom: '11:00',
        timeTo: '00:00',
      },
      {
        title: 'Neděle',
        timeFrom: '00:00',
        timeTo: '23:59',
      },
    ],
    openingHours: [
      {
        title: 'Pondělí',
        timeFrom: '00:00',
        timeTo: '23:59',
      },
      {
        title: 'Úterý',
        timeFrom: '00:00',
        timeTo: '10:59',
      },
      {
        title: 'Středa - Čtvrtek',
        timeFrom: '00:00',
        timeTo: '23:59',
      },
      {
        title: 'Pátek',
        timeFrom: '00:00',
        timeTo: '20:59',
      },
      {
        title: 'Sobota - Neděle',
        timeFrom: '00:00',
        timeTo: '23:59',
      },
    ],
  },
};
