import type { Meta, StoryObj } from 'storybook-solidjs';

import { MultiappOverlay } from '@/components/MultiappOverlay';

const meta = {
  title: 'Components/Global/Multiapp Overlay',
  component: MultiappOverlay,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MultiappOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoUrl: 'https://objedname.eu/user-data/companies/1/logo/logo_sym_color.png',
    loadingImgUrl: 'https://objedname.eu/user-data/companies/1/pre_loading.jpg',
    multiapps: [
      {
        linkUrl: '#',
        bgUrl: 'https://objedname.eu/user-data/companies/1/multiapp_factories/80/multiapp_bg.jpg',
        imageUrl: 'https://objedname.eu/user-data/companies/1/multiapp_factories/80/logo_white.png',
        name: 'Pizzerie obchod 1',
        description: '',
      },
      {
        linkUrl: '#',
        bgUrl: 'https://objedname.eu/user-data/companies/1/multiapp_factories/80/multiapp_bg.jpg',
        imageUrl: 'https://objedname.eu/user-data/companies/147/multiapp_factories/199/logo_white.png',
        name: 'Pizzerie obchod 2',
        description: '',
      },
      {
        linkUrl: '#',
        bgUrl: 'https://objedname.eu/user-data/companies/1/multiapp_factories/80/multiapp_bg.jpg',
        imageUrl: 'https://objedname.eu/user-data/companies/146/multiapp_factories/198/logo_white.png',
        name: 'Pizzerie obchod 3',
        description: '',
      },
      {
        linkUrl: '#',
        bgUrl: 'https://objedname.eu/user-data/companies/1/multiapp_factories/80/multiapp_bg.jpg',
        imageUrl: 'https://objedname.eu/user-data/companies/148/multiapp_factories/200/logo_white.png',
        name: 'Pizzerie obchod 4',
        description: '',
      },
      {
        linkUrl: '#',
        bgUrl: 'https://objedname.eu/user-data/companies/1/multiapp_factories/80/multiapp_bg.jpg',
        imageUrl: 'https://objedname.eu/user-data/companies/223/multiapp_factories/287/logo_white.png',
        name: 'Pizzerie obchod 5',
        description: '',
      },
      {
        linkUrl: '#',
        bgUrl: 'https://objedname.eu/user-data/companies/1/multiapp_factories/80/multiapp_bg.jpg',
        imageUrl: 'https://objedname.eu/user-data/companies/228/multiapp_factories/292/logo_white.png',
        name: 'Pizzerie obchod 6',
        description: '',
      },
      {
        linkUrl: '#',
        bgUrl: 'https://objedname.eu/user-data/companies/1/multiapp_factories/80/multiapp_bg.jpg',
        imageUrl: 'https://objedname.eu/user-data/companies/323/multiapp_factories/412/logo_white.png',
        name: 'Pizzerie obchod 7',
        description: '',
      },
      {
        linkUrl: '#',
        bgUrl: 'https://objedname.eu/user-data/companies/1/multiapp_factories/80/multiapp_bg.jpg',
        imageUrl: 'https://objedname.eu/user-data/companies/324/multiapp_factories/413/logo_white.png',
        name: 'Pizzerie obchod 8',
        description: '',
      },
      {
        linkUrl: '#',
        bgUrl: 'https://objedname.eu/user-data/companies/1/multiapp_factories/80/multiapp_bg.jpg',
        imageUrl: 'https://objedname.eu/user-data/companies/325/multiapp_factories/414/logo_white.png',
        name: 'Pizzerie obchod 9',
        description: '',
      },
    ],
    showDescriptions: false,
  },
};
