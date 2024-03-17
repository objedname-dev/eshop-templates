import type { Meta, StoryObj } from 'storybook-solidjs';

import { BottomPanel } from '@/components/BottomPanel';
import { Footer } from '@/components/Footer';
import { NewsColumn } from '@/components/NewsColumn';
import { TopPanel } from '@/components/TopPanel';

import { defaultProps as defaultFooterProps } from '../Footer.stories';

const meta = {
  title: 'Pages/News',
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
            <div class="slide news-box js-news-box" style={{ display: 'block' }}>
              <h4>Novinky</h4>
              <p
                class="no-content no-news-icon"
                id="news-no-news-yet"
                style={{ display: props.news.length ? 'none' : '' }}
              >
                Prozatím nebyly vyplněny žádné novinky.
              </p>
              <NewsColumn news={props.news} />
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
    news: [],
  },
};

export const WithNews: Story = {
  args: {
    news: [
      {
        title: 'Test notifikace',
        date: '09:13 09.01.2024',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in corrupti, aperiam nostrum aliquam, animi quam perferendis assumenda consectetur dicta ullam, asperiores nesciunt quidem consequuntur fuga nam. Doloribus, in qui.',
      },
      {
        title: 'Test notifikace 2',
        date: '14:23 07.01.2024',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet expedita quod aliquid reprehenderit placeat suscipit laudantium maxime quia cupiditate error ad, adipisci debitis! Animi eum rerum maiores placeat eius!',
      },
      {
        title: 'Test notifikace 3',
        date: '12:47 04.01.2024',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet expedita quod aliquid reprehenderit placeat suscipit laudantium maxime quia cupiditate error ad, adipisci debitis! Animi eum rerum maiores placeat eius! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe quam assumenda consequuntur quisquam ut sit fuga tempore illum, ipsa, molestiae eum maiores? Ab ratione cum dicta ipsa iste officia.',
      },
    ],
  },
};
