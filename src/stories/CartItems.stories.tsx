import type { Meta, StoryObj } from "storybook-solidjs";
import { CartItems } from "@/components/CartItems";

const meta = {
  title: "Components/Cart/Items",
  component: CartItems,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CartItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        name: "Pizza Montano",
        imageUrl: "https://objedname.eu/user-data/factories/80/imgs/thumbs/13348.jpg",
        variant: {
          name: "32 cm",
          price: "144 Kč",
        },
        packagingPrice: "5 Kč",
        count: 1,
      },
    ],
  },
};
