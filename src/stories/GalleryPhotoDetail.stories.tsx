import type { Meta, StoryObj } from 'storybook-solidjs';

import { GalleryPhotoDetail } from '@/components/GalleryPhotoDetail';

const meta = {
  title: 'Components/Gallery/Gallery Detail',
  component: GalleryPhotoDetail,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Gallery',
    left: [
      {
        type: 'img',
        mediaUrl:
          'https://objedname.eu/user-data/factories/80/imgs/gallery/512/880.jpg',
      },
      {
        type: 'img',
        mediaUrl:
          'https://objedname.eu/user-data/factories/80/imgs/gallery/512/882.jpg',
      },
      {
        type: 'iframe',
        mediaUrl: 'https://www.youtube.com/watch?v=lpFLTGCci8M',
      },
    ],
    right: [
      {
        type: 'img',
        mediaUrl:
          'https://objedname.eu/user-data/factories/80/imgs/gallery/512/881.jpg',
      },
      {
        type: 'img',
        mediaUrl:
          'https://objedname.eu/user-data/factories/80/imgs/gallery/512/883.jpg',
      },
    ],
  },
};
