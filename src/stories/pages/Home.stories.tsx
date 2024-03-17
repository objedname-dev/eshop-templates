import type { Meta, StoryObj } from 'storybook-solidjs';

import { Banners } from '@/components/Banners';
import { BottomPanel } from '@/components/BottomPanel';
import { FilterProductsBox } from '@/components/FilterProductsBox';
import { Footer } from '@/components/Footer';
import { Items } from '@/components/Items';
import { TopPanel } from '@/components/TopPanel';

import FoodTypesStory, { Default as foodTypesProps } from '../FoodTypes.stories';
import { defaultProps as defaultFooterProps } from '../Footer.stories';
import { Default as itemsProps } from '../Items.stories';

const FoodTypes = () =>
  FoodTypesStory.render(foodTypesProps.args as Parameters<typeof FoodTypesStory.render>[0]);

const meta = {
  title: 'Pages/Home',
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
            <div class="slide" id="home">
              <Banners
                banners={[
                  'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3691_ESHOP.jpg',
                  'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3691_ESHOP.jpg',
                ]}
              />
              <FoodTypes />
              <FilterProductsBox />
              <Items {...(itemsProps.args as Parameters<typeof Items>[0])} />
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
