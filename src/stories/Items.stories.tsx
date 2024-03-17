import type { Meta, StoryObj } from "storybook-solidjs";
import { Items } from "@/components/Items";

const meta = {
  title: "Components/Home/Items",
  component: Items,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Items>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Burgery",
        description: "Maso na burgery používáme z lokálních chovů",
        items: [
          {
            name: "Burger Black Tiger s Hranolkama",
            description: "Tmavé pečivo, cheddar, slanina, kuřecí",
            stickers: [
              {
                name: "OD 15:00",
                className: "sticker-timed",
              },
              {
                name: "LIMITOVANÁ EDICE",
                color: "#ff0000",
              },
            ],
            variants: [
              {
                name: "Malý",
                price: 139,
              },
              {
                name: "200g",
                price: 200,
              },
              {
                name: "380g",
                price: 590,
              },
            ],
          },
          {
            name: "Hamburger Vegetariana",
            description:
              "Sezamové pečivo, Beyond meat (velmi kvalitní náhražka masa ze zeleniny), eidam, cibule, okurek, rajče, salát",
            stickers: [
              {
                name: "OD 15:00",
                className: "sticker-timed",
              },
              {
                name: "VEGETARIÁNSKÉ",
                className: "sticker-green",
              },
              {
                name: "DOPORUČUJEME",
                className: "sticker-green",
              },
            ],
            variants: [
              {
                name: "300g",
                price: 289,
              },
            ],
          },
        ],
      },
      {
        title: "Pizza",
        description: "Vyberte si naše skvělé tomátové pizzy!",
        items: [
          {
            name: "Pizza Kakaroto",
            description:
              "tomatový základ, eidam, zelené olivy, rajče, chilli, kuřecí maso, paprika",
            stickers: [
              {
                name: "DOPORUČUJEME",
                className: "sticker-green",
              },
              {
                name: "PÁLIVÉ",
                className: "sticker-red",
              },
              {
                name: "SLEVA 30 KČ",
                className: "sticker-yellow",
              },
            ],
            variants: [
              {
                name: "32 cm",
                price: 115,
              },
              {
                name: "45 cm",
                price: 229,
              },
            ],
          },
          {
            name: "Pizza Montano",
            description:
              "tomatový základ, smetana, eidam, cheddar, cibule, ananas, smetanito kousky sýra",
            stickers: [
              {
                name: "SLEVA 30 KČ",
                className: "sticker-yellow",
              },
            ],
            variants: [
              {
                name: "32 cm",
                price: 109,
              },
              {
                name: "45 cm",
                price: 239,
              },
            ],
          },
          {
            name: "Pizza Oliviero",
            description: "tomatový základ, černé olivy, eidam, vejce, parmazán, rajče",
            stickers: [
              {
                name: "SLEVA 30 KČ",
                className: "sticker-yellow",
              },
            ],
            variants: [
              {
                name: "32 cm",
                price: 149,
              },
              {
                name: "45 cm",
                price: 249,
              },
            ],
          },
        ],
      },
    ],
  },
};
