import type { Meta, StoryObj } from 'storybook-solidjs';

import { BottomPanel } from '@/components/BottomPanel';
import { CartItems } from '@/components/CartItems';
import { CartSum } from '@/components/CartSum';
import { Footer } from '@/components/Footer';
import { RecommendProductsBox, defaultProducts } from '@/components/RecommendProductsBox';
import { TopPanel } from '@/components/TopPanel';

import { defaultProps as defaultFooterProps } from '../Footer.stories';

const meta = {
  title: 'Pages/Cart Overview',
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
            <div class="slide" id="cart" style={{ display: 'block' }}>
              <div class="cart-box">
                <h4>Košík</h4>
                <div class="js-cart-action-container" />
                <div class="js-no-cart-items" style={{ display: props.items.length ? 'none' : '' }}>
                  <p class="no-content no-cart-icon">
                    V košíku nemáte žádné položky, prosím vyberte si nějaké zboží z naší nabídky.
                  </p>
                </div>
                <CartItems items={props.items} />
                <div class="cart-right-box" style={{ display: props.items.length ? '' : 'none' }}>
                  <CartSum
                    nextBtnText="Pokračovat"
                    bonusPoints={props.bonusPoints}
                    totalPrice={props.totalPrice}
                  />
                  <RecommendProductsBox title="K nákupu doporučujeme:" products={defaultProducts} />
                </div>
                <div class="cleaner" />
              </div>
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
    items: [],
  },
};

export const WithItems: Story = {
  args: {
    bonusPoints: 20,
    totalPrice: '581 Kč',
    items: [
      {
        name: 'Burger Black Tiger s Hranolkama',
        imageUrl: 'https://cdn.objedname.eu/user-data/factories/80/imgs/thumbs/13355.jpg',
        variant: {
          name: '200g',
          price: '200 Kč',
        },
        packagingPrice: '5 Kč',
        count: 1,
      },
      {
        name: 'Pizza šunková',
        imageUrl: 'https://cdn.objedname.eu/user-data/factories/80/imgs/thumbs/24097.jpg',
        variant: {
          name: '32cm',
          price: '338 Kč',
        },
        packagingPrice: '38 Kč',
        count: 2,
      },
    ],
  },
};
