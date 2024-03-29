import type { Meta, StoryObj } from 'storybook-solidjs';

import { BottomPanel } from '@/components/BottomPanel';
import { CartDeliveryForm } from '@/components/CartDeliveryForm';
import { CartSum } from '@/components/CartSum';
import { Footer } from '@/components/Footer';
import { TopPanel } from '@/components/TopPanel';

import { defaultProps as defaultFooterProps } from '../Footer.stories';

const meta = {
  title: 'Pages/Cart Step 2',
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
            <form id="order-customer-form">
              <div class="slide" id="cartOverlay-2" style={{ display: 'block' }}>
                <div class="cart-box">
                  <h4>Výběr dopravy</h4>
                  <div class="cart-items">
                    <CartDeliveryForm
                      selectedDelivery={props.selectedDelivery}
                      selectedPayment={props.selectedPayment}
                      isLoggedIn={props.isLoggedIn}
                    />
                  </div>
                  <div class="cart-right-box">
                    <CartSum
                      nextBtnText="Pokračovat"
                      bonusPoints={props.bonusPoints}
                      totalPrice={props.totalPrice}
                    />
                  </div>
                  <div class="cleaner" />
                </div>
              </div>
            </form>
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
  argTypes: {
    selectedDelivery: { control: 'select', options: ['delivery', 'pickup'] },
    selectedPayment: { control: 'select', options: ['card', 'cash'] },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bonusPoints: 20,
    totalPrice: '581 Kč',
    selectedDelivery: null,
    selectedPayment: null,
    isLoggedIn: false,
  },
};
