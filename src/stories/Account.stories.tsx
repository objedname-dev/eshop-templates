import type { Meta, StoryObj } from "storybook-solidjs";
import { Account } from "@/components/Account";

const meta = {
  title: "Components/Account/Account Settings",
  component: Account,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Account>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pointsCount: 61,
  },
};
