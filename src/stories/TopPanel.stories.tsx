import type { Meta, StoryObj } from 'storybook-solidjs';

import { TopPanel } from '@/components/TopPanel';

const meta = {
  title: 'Components/Global/Top Panel',
  render: (props) => {
    return (
      <div class="tw-bg-red tw-h-64">
        <TopPanel {...props} />
      </div>
    );
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TopPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoUrl:
      'https://objedname.eu/user-data/factories/80/imgs/logo/logo_hor_white.png',
    translations: [
      { name: 'English', value: 'en' },
      { name: 'German', value: 'de' },
    ],
    isMiniMenu: true,
  },
};
