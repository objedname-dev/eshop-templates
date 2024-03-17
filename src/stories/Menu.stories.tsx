import type { Meta, StoryObj } from "storybook-solidjs";
import { Menu } from "@/components/Menu";

const meta = {
  title: "Components/Global/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
