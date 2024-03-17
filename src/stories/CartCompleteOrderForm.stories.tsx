import type { Meta, StoryObj } from "storybook-solidjs";
import { CartCompleteOrderForm } from "@/components/CartCompleteOrderForm";
import { ComponentProps } from "solid-js";

const meta = {
  title: "Components/Cart/Complete Order Form",
  component: CartCompleteOrderForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CartCompleteOrderForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    saveFormData: false,
    agreeWithTermsAndConditions: false,
    showAgreeWithTermsAndConditions: true,
    isTimedOrder: true,
    timedOrderData: [
      {
        date: "Dnes 16.3.",
        data: [],
      },
      {
        date: "Dnes 17.3.",
        data: [
          {
            time: "12:00",
            capacity: 1,
            isEco: false,
          },
          {
            time: "13:00",
            capacity: 0,
            isEco: false,
          },
          {
            time: "14:00",
            capacity: 2,
            isEco: true,
          },
          {
            time: "15:00",
            capacity: 2,
          },
        ],
      },
      {
        date: "Po 18.3.",
        data: [],
      },
    ],
    showTimedOrderEcoMessage: true,
  } satisfies Partial<ComponentProps<typeof CartCompleteOrderForm>>,
};
