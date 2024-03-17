import type { Meta, StoryObj } from 'storybook-solidjs';

import { BottomPanel } from '@/components/BottomPanel';
import { CartCompleteOrderForm } from '@/components/CartCompleteOrderForm';
import { CartSum } from '@/components/CartSum';
import { Footer } from '@/components/Footer';
import { TopPanel } from '@/components/TopPanel';

import { defaultProps as defaultFooterProps } from '../Footer.stories';

const meta = {
  title: 'Pages/Cart Step 3',
  render: (props) => {
    return (
      <div class="body-container">
        <div class="fullpage">
          <TopPanel
            logoUrl="https://objedname.eu/user-data/factories/80/imgs/logo/logo_hor_white.png"
            isMiniMenu
          />
          <BottomPanel cartItemsCount={2} pointsCount={100} showPoints={false} />
          <div class="section">
            <form id="order-customer-form">
              <div class="slide" id="cartOverlay-3" style={{ display: 'block' }}>
                <div class="cart-box">
                  <h4>Dokončení objednávky</h4>
                  <div class="cart-items">
                    <CartCompleteOrderForm
                      agreeWithTermsAndConditions={props.agreeWithTermsAndConditions}
                      isTimedOrder={props.isTimedOrder}
                      onAgreeWithTermsAndConditionsCheck={props.onAgreeWithTermsAndConditionsCheck}
                      onIsTimedOrderCheck={props.onIsTimedOrderCheck}
                      onSaveFormDataCheck={props.onSaveFormDataCheck}
                      saveFormData={props.saveFormData}
                      showAgreeWithTermsAndConditions={props.showAgreeWithTermsAndConditions}
                      showTimedOrderEcoMessage={props.showTimedOrderEcoMessage}
                      timedOrderData={props.timedOrderData}
                    />
                  </div>
                  <div class="cart-right-box">
                    <CartSum
                      nextBtnText="Odeslat"
                      nextBtnDisabled={props.nextBtnDisabled}
                      deliveryPrice={props.deliveryPrice}
                      showCoupon={props.showCoupon}
                      bonusPoints={props.bonusPoints}
                      totalPrice={props.totalPrice}
                      showDelivery={true}
                    />
                  </div>
                  <div class="cleaner" />
                </div>
              </div>
              <div></div>
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
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bonusPoints: 20,
    totalPrice: '581 Kč',
    deliveryPrice: '20 Kč',
    showCoupon: true,
    nextBtnDisabled: true,

    isTimedOrder: false,
    saveFormData: false,
    agreeWithTermsAndConditions: false,
    showAgreeWithTermsAndConditions: true,
    showTimedOrderEcoMessage: true,
    timedOrderData: [
      {
        date: 'Dnes 16.3.',
        data: [],
      },
      {
        date: 'Dnes 17.3.',
        data: [
          {
            time: '12:00',
            capacity: 1,
            isEco: false,
          },
          {
            time: '13:00',
            capacity: 0,
            isEco: false,
          },
          {
            time: '14:00',
            capacity: 2,
            isEco: true,
          },
          {
            time: '15:00',
            capacity: 2,
          },
        ],
      },
      {
        date: 'Po 18.3.',
        data: [],
      },
    ],
  },
};
