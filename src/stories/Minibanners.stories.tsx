import type { Meta, StoryObj } from "storybook-solidjs";
import { Minibanners } from "@/components/Minibanners";

const meta = {
  title: "Components/Home/Minibanners",
  component: Minibanners,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Minibanners>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleBanner: Story = {
  args: {
    minibanners: [
      "https://objedname.eu/user-data/factories/80/imgs/banners/banner_3694_ESHOP_MINI.jpg",
    ],
  },
};

export const TwoBanners: Story = {
  args: {
    minibanners: [
      "https://objedname.eu/user-data/factories/80/imgs/banners/banner_3694_ESHOP_MINI.jpg",
      "https://objedname.eu/user-data/factories/80/imgs/banners/banner_2070_ESHOP_MINI.jpg",
    ],
  },
};

export const ThreeBanners: Story = {
  args: {
    minibanners: [
      "https://objedname.eu/user-data/factories/80/imgs/banners/banner_3694_ESHOP_MINI.jpg",
      "https://objedname.eu/user-data/factories/80/imgs/banners/banner_2070_ESHOP_MINI.jpg",
      "https://objedname.eu/user-data/factories/80/imgs/banners/banner_2069_ESHOP_MINI.jpg",
    ],
  },
};

export const FourBanners: Story = {
  args: {
    minibanners: [
      "https://objedname.eu/user-data/factories/80/imgs/banners/banner_3694_ESHOP_MINI.jpg",
      "https://objedname.eu/user-data/factories/80/imgs/banners/banner_2070_ESHOP_MINI.jpg",
      "https://objedname.eu/user-data/factories/80/imgs/banners/banner_2069_ESHOP_MINI.jpg",
      "https://objedname.eu/user-data/factories/80/imgs/banners/banner_2068_ESHOP_MINI.jpg",
    ],
  },
};
