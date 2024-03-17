import type { Meta, StoryObj } from "storybook-solidjs";
import { FoodTypes } from "@/components/FoodTypes";
import { createEffect, createSignal } from "solid-js";

const meta = {
  title: "Components/Home/Food Types",
  render: (props) => {
    const [foodTypes, setFoodTypes] = createSignal(props.foodTypes);

    createEffect(() => {
      setFoodTypes(props.foodTypes);
    });

    return (
      <FoodTypes
        foodTypes={foodTypes()}
        onFoodTypeClick={({ index: selectedIndex, type }) => {
          console.log(selectedIndex, type);
          setFoodTypes((foodTypes) => {
            switch (type) {
              case "main":
                return foodTypes.map((foodType, index) => ({
                  ...foodType,
                  active: index === selectedIndex,
                  subFoodTypes: foodType.subFoodTypes?.map((subFoodType) => ({
                    ...subFoodType,
                    active: false,
                  })),
                }));
              case "sub":
                return foodTypes.map((foodType) => ({
                  ...foodType,
                  subFoodTypes: foodType.subFoodTypes?.map((subFoodType, index) => ({
                    ...subFoodType,
                    active: index === selectedIndex,
                  })),
                }));
            }
          });
        }}
      />
    );
  },
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FoodTypes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    foodTypes: [
      {
        name: "Vše",
        className: "foodtype-all",
        active: true,
      },
      {
        name: "Denní menu",
        iconUrl: "https://objedname.eu/svg/454545/food_daily_menu.svg",
      },
      {
        name: "Pizza",
        iconUrl: "https://objedname.eu/svg/454545/pizza_pizza_slice.svg",
        subFoodTypes: [
          {
            name: "Tomatový základ",
            active: false,
          },
          {
            name: "Smetanový základ",
            active: false,
          },
        ],
      },
      {
        name: "Burgery",
        iconUrl: "https://objedname.eu/svg/454545/hamburger_burger.svg",
        subFoodTypes: [
          {
            name: "Hovězí",
            active: false,
          },
          {
            name: "Kuřecí",
            active: false,
          },
          {
            name: "Vegan",
            active: false,
          },
        ],
      },
      {
        name: "Nápoje",
        iconUrl: "https://objedname.eu/svg/454545/pizza_pizza_slice.svg",
        subFoodTypes: [
          {
            name: "Limonády",
            active: false,
          },
          {
            name: "Čaj",
            active: false,
          },
          {
            name: "Káva",
            active: false,
          },
          {
            name: "Pivo",
            active: false,
          },
          {
            name: "Vodka",
            active: false,
          },
          {
            name: "Gin",
            active: false,
          },
          {
            name: "Rum",
            active: false,
          },
        ],
      },
    ],
  },
};
