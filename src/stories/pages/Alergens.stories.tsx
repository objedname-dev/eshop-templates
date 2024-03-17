import type { Meta, StoryObj } from "storybook-solidjs";
import { TopPanel } from "@/components/TopPanel";
import { BottomPanel } from "@/components/BottomPanel";
import { defaultProps as defaultFooterProps } from "../Footer.stories";
import { Footer } from "@/components/Footer";
import { AlergensBox, defaultAlergens } from "@/components/AlergensBox";

const meta = {
  title: "Pages/Alergens",
  render: () => {
    return (
      <div class='body-container'>
        <div class='fullpage'>
          <TopPanel
            logoUrl='https://objedname.eu/user-data/factories/80/imgs/logo/logo_hor_white.png'
            isMiniMenu
          />
          <BottomPanel cartItemsCount={0} pointsCount={100} showPoints={false} />
          <div class='section'>
            <AlergensBox alergens={defaultAlergens} />
          </div>
        </div>
        <Footer {...defaultFooterProps} />
      </div>
    );
  },
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
