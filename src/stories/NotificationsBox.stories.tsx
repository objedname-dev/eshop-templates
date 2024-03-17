import type { Meta, StoryObj } from "storybook-solidjs";
import { NotificationsBox } from "@/components/NotificationsBox";

const meta = {
  title: "Components/Global/Notifications Box",
  component: NotificationsBox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NotificationsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    notifications: [
      {
        message: "Test",
        type: "success",
      },
      {
        message: "Test",
        type: "info",
      },
      {
        message: "Test",
        type: "error",
      },
    ],
  },
};
