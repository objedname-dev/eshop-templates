import type { Meta, StoryObj } from "storybook-solidjs";
import { Footer, paymentMethods, socials } from "@/components/Footer";
import { ComponentProps } from "solid-js";

export const defaultProps = {
  logoUrl: "https://objedname.eu/user-data/factories/80/imgs/logo/logo_ver_white.png",
  address: "Hlavní 11, Ostrava, 12300",
  showSelectFactory: true,
  paymentMethods: ["mastercard", "visa", "sodexo", "up", "b-payment", "gopay"],
  phone: "+420 771 145 451",
  socialLinks: ["fb", "twitter", "instagram"],
  openingHours: [
    { title: "Pondělí - Pátek", timeFrom: "11:00", timeTo: "21:00" },
    { title: "Sobota", timeFrom: "11:00", timeTo: "00:00" },
    { title: "Neděle", timeFrom: "00:00", timeTo: "23:59" },
  ],
  showAppStore: true,
  showGooglePlay: true,
} satisfies ComponentProps<typeof Footer>;

const meta = {
  title: "Components/Global/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: defaultProps,
  argTypes: {
    paymentMethods: { control: "multi-select", options: paymentMethods },
    socialLinks: { control: "multi-select", options: socials },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
