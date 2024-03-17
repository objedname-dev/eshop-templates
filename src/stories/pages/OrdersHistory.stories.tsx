import type { Meta, StoryObj } from 'storybook-solidjs';

import { BottomPanel } from '@/components/BottomPanel';
import { Footer } from '@/components/Footer';
import { OrdersHistoryBox } from '@/components/OrdersHistoryBox';
import { TopPanel } from '@/components/TopPanel';

import { defaultProps as defaultFooterProps } from '../Footer.stories';

const meta = {
  title: 'Pages/Orders History',
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
            <div class="slide" id="orders-history" style={{ display: 'block' }}>
              <OrdersHistoryBox orders={props.orders} />
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

export const Empty: Story = {
  args: {
    orders: [],
  },
};

export const WithOrders: Story = {
  args: {
    orders: [
      {
        date: '07:51 5.3.2024',
        address: 'Hlavní 11, Ostrava, 12300',
        status: 'Objednávka',
        items: [
          {
            name: 'Pizza Montano',
            count: 1,
            price: '109 Kč',
          },
        ],
        totalPrice: '114 Kč',
      },
      {
        date: '18:34 8.3.2024',
        address: 'Hlavní 11, Ostrava, 12300',
        status: 'Objednávka',
        items: [
          {
            name: 'Pizza Montano',
            count: 1,
            price: '109 Kč',
          },
          {
            name: 'Pizza šunková',
            count: 1,
            price: '169 Kč',
          },
        ],
        totalPrice: '283 Kč',
      },
    ],
  },
};
