import type { Meta, StoryObj } from "storybook-solidjs";
import { Login } from "@/components/Login";

const meta = {
  title: "Components/Account/Login",
  component: Login,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailStep: Story = {
  args: {
    step: 1,
  },
};
export const CodeStep: Story = {
  args: {
    step: 2,
  },
};
