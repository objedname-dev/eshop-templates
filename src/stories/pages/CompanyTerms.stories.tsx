import type { Meta, StoryObj } from 'storybook-solidjs';

import { BottomPanel } from '@/components/BottomPanel';
import { CompanyTerms } from '@/components/CompanyTerms';
import { Footer } from '@/components/Footer';
import { TopPanel } from '@/components/TopPanel';

import { defaultProps as defaultFooterProps } from '../Footer.stories';

const meta = {
  title: 'Pages/Company Terms',
  render: () => {
    return (
      <div class="body-container">
        <div class="fullpage">
          <TopPanel
            logoUrl="https://objedname.eu/user-data/factories/80/imgs/logo/logo_hor_white.png"
            isMiniMenu
          />
          <BottomPanel
            cartItemsCount={0}
            pointsCount={100}
            showPoints={false}
          />
          <div class="section">
            <CompanyTerms
              terms={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti fugiat ducimus est saepe doloribus, praesentium odit eligendi iste amet nesciunt, molestiae numquam. Repellat quae, nostrum officiis iusto minima fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi amet exercitationem, nisi, ut molestiae dicta sapiente inventore ab a illo neque fugit doloribus? Sunt, cum! Nihil nobis vitae architecto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corporis beatae blanditiis veniam obcaecati excepturi, quidem recusandae nisi et magnam rem labore ut molestias possimus veritatis error odio voluptatem! Amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam dolorum commodi aliquid repellat quaerat quo eligendi? Qui earum iusto incidunt porro adipisci totam iure quaerat, consequuntur nulla voluptatem laborum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quis ipsa, necessitatibus, animi commodi mollitia ullam consequuntur iure dolore suscipit ab perspiciatis quod amet quo. Dolor numquam magnam aliquid eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam nulla, maxime quibusdam atque porro accusamus totam. Eveniet eum dolor ducimus sed obcaecati corporis? Perspiciatis similique explicabo eum magni eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere facilis laudantium assumenda debitis libero cupiditate. Doloremque quod ducimus molestias animi iusto rerum, aliquid reprehenderit sapiente necessitatibus, repudiandae, similique non possimus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta, non suscipit iure ipsam laudantium excepturi iusto nisi eaque neque, reprehenderit, consequuntur expedita nulla quae exercitationem ratione sapiente. Nam, distinctio.'
              }
            />
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
