import type { Meta, StoryObj } from 'storybook-solidjs';

import { Banners } from '@/components/Banners';

const meta = {
  title: 'Components/Home/Banners',
  component: Banners,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Banners>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WebSingleBanner: Story = {
  args: {
    banners: [
      'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3691_ESHOP.jpg',
    ],
  },
};

export const WebMultipleBanners: Story = {
  args: {
    banners: [
      'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3691_ESHOP.jpg',
      'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3691_ESHOP.jpg',
    ],
  },
};

export const AppSingleBanner: Story = {
  args: {
    banners: [
      'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3693_APP.jpg',
    ],
  },
};

export const AppMultipleBanners: Story = {
  args: {
    banners: [
      'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3693_APP.jpg',
      'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3693_APP.jpg',
    ],
  },
};
