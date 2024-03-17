import type { Meta, StoryObj } from "storybook-solidjs";
import { TopPanel } from "@/components/TopPanel";
import { BottomPanel } from "@/components/BottomPanel";
import { defaultProps as defaultFooterProps } from "../Footer.stories";
import { Footer } from "@/components/Footer";
import { GalleryPhotoDetail } from "@/components/GalleryPhotoDetail";

const meta = {
  title: "Pages/Gallery Detail",
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
            <div class='slide' id='gallery-items' style={{ display: "block" }}>
              <GalleryPhotoDetail
                title='Gallery'
                left={[
                  {
                    type: "img",
                    mediaUrl:
                      "https://objedname.eu/user-data/factories/80/imgs/gallery/512/880.jpg",
                  },
                  {
                    type: "img",
                    mediaUrl:
                      "https://objedname.eu/user-data/factories/80/imgs/gallery/512/882.jpg",
                  },
                  {
                    type: "iframe",
                    mediaUrl: "https://www.youtube.com/watch?v=lpFLTGCci8M",
                  },
                ]}
                right={[
                  {
                    type: "img",
                    mediaUrl:
                      "https://objedname.eu/user-data/factories/80/imgs/gallery/512/881.jpg",
                  },
                  {
                    type: "img",
                    mediaUrl:
                      "https://objedname.eu/user-data/factories/80/imgs/gallery/512/883.jpg",
                  },
                ]}
              />
            </div>
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
