import type { Meta, StoryObj } from 'storybook-solidjs';

import { BottomPanel } from '@/components/BottomPanel';
import { Footer } from '@/components/Footer';
import { Login } from '@/components/Login';
import { TopPanel } from '@/components/TopPanel';

import { defaultProps as defaultFooterProps } from '../Footer.stories';

const meta = {
  title: 'Pages/Login',
  render: (props) => {
    return (
      <div class="body-container">
        <div class="fullpage">
          <TopPanel
            logoUrl="https://objedname.eu/user-data/factories/80/imgs/logo/logo_hor_white.png"
            isMiniMenu
          />
          <BottomPanel cartItemsCount={0} pointsCount={100} showPoints={false} />
          <div class="section">
            <div class="slide" id="account-settings" style={{ display: 'block' }}>
              <Login step={props.step} />
            </div>
          </div>
        </div>
        <Footer {...defaultFooterProps} />
      </div>
    );
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailStep: Story = {
  args: {
    step: 1,
  },
};

export const CodeStep: Story = {
  args: {
    step: 2,
  },
};
