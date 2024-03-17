import type { Meta, StoryObj } from "storybook-solidjs";
import { GalleryBox } from "@/components/GalleryBox";

const meta = {
  title: "Components/Gallery/Galleries",
  component: GalleryBox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    galleries: [],
  },
};
export const WithGalleries: Story = {
  args: {
    galleries: [
      {
        title: "Naše oblíbené!",
        photoCount: 8,
        videoCount: 2,
        thumbnailUrl:
          "https://objedname.eu/ext-images/aHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvdS1LRFJtT1lTYjAvaHFkZWZhdWx0LmpwZw==?s=thumb",
        lastUpdated: "15:18 27.01.2018",
      },
      {
        title: "Galerie 1",
        photoCount: 1,
        videoCount: 0,
        thumbnailUrl: "https://objedname.eu/user-data/factories/80/imgs/gallery/512/615.jpg",
        lastUpdated: "11:57 30.11.2020",
      },
      {
        title: "Naše produkty",
        photoCount: 4,
        videoCount: 1,
        thumbnailUrl:
          "https://objedname.eu/ext-images/aHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvbHBGTFRHQ2NpOE0vaHFkZWZhdWx0LmpwZw==?s=thumb",
        lastUpdated: "16:35 08.02.2022",
      },
    ],
  },
};
