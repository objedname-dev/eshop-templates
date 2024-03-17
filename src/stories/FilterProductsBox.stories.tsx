import type { Meta, StoryObj } from "storybook-solidjs";
import { FilterProductsBox } from "@/components/FilterProductsBox";

const meta = {
  title: "Components/Home/Filter Products",
  component: FilterProductsBox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FilterProductsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
