import type { Meta, StoryObj } from 'storybook-solidjs';

import { BottomPanel } from '@/components/BottomPanel';
import { Footer } from '@/components/Footer';
import { ItemReviewsBox } from '@/components/ItemReviewsBox';
import { ProductDetail } from '@/components/ProductDetail';
import { defaultProducts } from '@/components/RecommendProductsBox';
import { TopPanel } from '@/components/TopPanel';

import { defaultProps as defaultFooterProps } from '../Footer.stories';

const meta = {
  title: 'Pages/Item Detail',
  render: () => {
    return (
      <div class="body-container">
        <div class="fullpage">
          <TopPanel
            logoUrl="https://objedname.eu/user-data/factories/80/imgs/logo/logo_hor_white.png"
            isMiniMenu
          />
          <BottomPanel cartItemsCount={0} pointsCount={100} showPoints={false} />
          <div class="section">
            <div class="slide" id="item-detail" style={{ display: 'block' }}>
              <ProductDetail
                name="Pizza šunková"
                imageUrl="https://objedname.eu/user-data/factories/80/imgs/items/24097.png"
                stickers={[{ name: 'DOPORUČUJEME', className: 'sticker-green' }]}
                variants={[{ name: '32cm', price: '169 Kč' }]}
                description="tomatový základ, houby, anglická slanina, olivy, cherry rajčata, bazalka"
                packaging="+5 Kč balení"
                alergens={[1, 3, 7]}
                weight="420g"
                recommendBox={{
                  title: 'Také doporučujeme:',
                  products: defaultProducts,
                }}
              />
              <ItemReviewsBox
                isLoggedIn
                reviews={[
                  {
                    date: '8.2.2002',
                    stars: 4,
                    text: 'Super!',
                    reply: { date: '9.2.2002', text: 'Děkujeme!' },
                  },
                ]}
              />
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

export const Default: Story = {
  args: {},
};
