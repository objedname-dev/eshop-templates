import type { Meta, StoryObj } from "storybook-solidjs";
import { TopPanel } from "@/components/TopPanel";
import { BottomPanel } from "@/components/BottomPanel";
import { defaultProps as defaultFooterProps } from "../Footer.stories";
import { Footer } from "@/components/Footer";
import { FavoriteItemsBox } from "@/components/FavoriteItemsBox";

const meta = {
  title: "Pages/Favorite Items",
  render: (props) => {
    return (
      <div class='body-container'>
        <div class='fullpage'>
          <TopPanel
            logoUrl='https://objedname.eu/user-data/factories/80/imgs/logo/logo_hor_white.png'
            isMiniMenu
          />
          <BottomPanel cartItemsCount={0} pointsCount={100} showPoints={false} />
          <div class='section'>
            <div class='slide' id='favorite-items' style={{ display: "block" }}>
              <FavoriteItemsBox items={props.items} />
            </div>
          </div>
        </div>
        <Footer {...defaultFooterProps} />
      </div>
    );
  },
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
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
    items: [
      {
        name: "Pizza šunková",
        variant: { name: "32cm", price: "169 Kč" },
        imageUrl: "https://cdn.objedname.eu/user-data/factories/80/imgs/thumbs/24097.jpg",
      },
      {
        name: "Pizza šunková",
        variant: { name: "32cm", price: "169 Kč" },
        imageUrl: "https://cdn.objedname.eu/user-data/factories/80/imgs/thumbs/24097.jpg",
      },
      {
        name: "Pizza šunková",
        variant: { name: "32cm", price: "169 Kč" },
        imageUrl: "https://cdn.objedname.eu/user-data/factories/80/imgs/thumbs/24097.jpg",
      },
    ],
  },
};
