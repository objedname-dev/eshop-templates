import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import { Banners } from '@/components/Banners';
import { BottomPanel } from '@/components/BottomPanel';
import { FilterProductsBox } from '@/components/FilterProductsBox';
import { Footer } from '@/components/Footer';
import { Items } from '@/components/Items';
import { Minibanners } from '@/components/Minibanners';
import { NewsOverlay } from '@/components/NewsOverlay';
import { NotificationType, NotificationsBox } from '@/components/NotificationsBox';
import { TopPanel } from '@/components/TopPanel';
import { OrderStatus, TrackingBox } from '@/components/TrackingBox';

import FoodTypesStory, { Default as foodTypesProps } from '../FoodTypes.stories';
import { defaultProps as defaultFooterProps } from '../Footer.stories';
import { Default as itemsProps } from '../Items.stories';

const FoodTypes = () =>
  FoodTypesStory.render(foodTypesProps.args as Parameters<typeof FoodTypesStory.render>[0]);

const meta = {
  title: 'Pages/Home',
  render: (props) => {
    const [isFilterBoxOpen, setIsFilterBoxOpen] = createSignal(false);
    return (
      <div class="body-container">
        <div class="fullpage">
          <TopPanel
            logoUrl="https://objedname.eu/user-data/factories/80/imgs/logo/logo_hor_white.png"
            isMiniMenu
          />
          <NotificationsBox notifications={props.notifications} />
          <BottomPanel cartItemsCount={0} pointsCount={100} showPoints={false} />
          <div class="section">
            {props.news && <NewsOverlay {...props.news} />}
            <div class="slide" id="home">
              <Banners
                banners={[
                  'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3691_ESHOP.jpg',
                  'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3691_ESHOP.jpg',
                ]}
              />
              <Minibanners
                minibanners={[
                  'https://objedname.eu/user-data/factories/80/imgs/banners/banner_3694_ESHOP_MINI.jpg',
                  'https://objedname.eu/user-data/factories/80/imgs/banners/banner_2070_ESHOP_MINI.jpg',
                  'https://objedname.eu/user-data/factories/80/imgs/banners/banner_2069_ESHOP_MINI.jpg',
                  'https://objedname.eu/user-data/factories/80/imgs/banners/banner_2068_ESHOP_MINI.jpg',
                ]}
              />
              {props.trackingOrders && <TrackingBox orders={props.trackingOrders} />}
              <FoodTypes />
              <FilterProductsBox
                isOpen={isFilterBoxOpen()}
                onOpenBtnClick={() => setIsFilterBoxOpen((isFilterBoxOpen) => !isFilterBoxOpen)}
              />
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

export const WithTrackedOrder: Story = {
  args: {
    trackingOrders: [
      {
        orderNumber: 'OB00004821',
        status: OrderStatus.NEW,
        statusMessage: 'Čeká na přijetí',
        comment: 'V případě potíží nás kontaktujte telefonicky na: +420 771 145 451',
      },
    ],
  },
};

export const WithNotification: Story = {
  args: {
    notifications: [
      {
        type: NotificationType.INFO,
        message:
          'Upozorňujeme, že prodleva v doručení objednávek je vyšší než obvykle. Momentální čas doručení je 120 minut.',
        className: 'appDeliveryTimeMessage',
      },
    ],
  },
};

export const WithNews: Story = {
  args: {
    news: {
      title: 'Test notifikace',
      date: '09:13 09.01.2024',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in corrupti, aperiam nostrum aliquam, animi quam perferendis assumenda consectetur dicta ullam, asperiores nesciunt quidem consequuntur fuga nam. Doloribus, in qui.',
    },
  },
};
