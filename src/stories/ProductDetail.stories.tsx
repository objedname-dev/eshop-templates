import type { Meta, StoryObj } from "storybook-solidjs";
import { ProductDetail } from "@/components/ProductDetail";

const meta = {
  title: "Components/Item Detail/Summary",
  component: ProductDetail,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProductDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Pizza šunková",
    imageUrl: "https://objedname.eu/user-data/factories/80/imgs/items/24097.png",
    variants: [
      {
        name: "32cm",
        price: "140 Kč",
      },
    ],
    stickers: [
      {
        name: "DOPORUČUJEME",
        className: "sticker-green",
      },
    ],
    description: "tomatový základ, houby, anglická slanina, olivy, cherry rajčata, bazalka",
    packaging: "+5 Kč Krabice",
    alergens: [1, 3, 7],
    weight: "400g",
  },
};
