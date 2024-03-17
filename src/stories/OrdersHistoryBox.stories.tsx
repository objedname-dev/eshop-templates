import type { Meta, StoryObj } from "storybook-solidjs";
import { OrdersHistoryBox } from "@/components/OrdersHistoryBox";

const meta = {
  title: "Components/Orders History/Orders History Box",
  component: OrdersHistoryBox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof OrdersHistoryBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    orders: [],
  },
};

export const WithOrders: Story = {
  args: {
    orders: [
      {
        date: "07:51 5.3.2024",
        address: "Hlavní 11, Ostrava, 12300",
        status: "Objednávka",
        items: [
          {
            name: "Pizza Montano",
            count: 1,
            price: "109 Kč",
          },
        ],
        totalPrice: "114 Kč",
      },
      {
        date: "18:34 8.3.2024",
        address: "Hlavní 11, Ostrava, 12300",
        status: "Objednávka",
        items: [
          {
            name: "Pizza Montano",
            count: 1,
            price: "109 Kč",
          },
          {
            name: "Pizza šunková",
            count: 1,
            price: "169 Kč",
          },
        ],
        totalPrice: "283 Kč",
      },
    ],
  },
};
