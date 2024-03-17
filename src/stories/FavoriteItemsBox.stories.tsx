import type { Meta, StoryObj } from "storybook-solidjs";
import { FavoriteItemsBox } from "@/components/FavoriteItemsBox";

const meta = {
  title: "Components/Favorite/Favorite Items",
  component: FavoriteItemsBox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FavoriteItemsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
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
