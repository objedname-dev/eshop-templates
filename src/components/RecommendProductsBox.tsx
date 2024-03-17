import { Component, For } from "solid-js";

export const defaultProducts = [
  {
    imageUrl: "https://objedname.eu/user-data/factories/80/imgs/items/13347.png",
    name: "Banán Pomerančový džus",
    price: "80 Kč",
  },
  {
    imageUrl: "https://objedname.eu/user-data/factories/80/imgs/items/default_detail.jpg",
    name: "pozdní sběr Červené víno",
    price: "199 Kč",
  },
  {
    imageUrl: "https://objedname.eu/user-data/factories/80/imgs/items/13338.png",
    name: "Pivo Corona Extra",
    price: "80 Kč",
  },
  {
    imageUrl: "https://objedname.eu/user-data/factories/80/imgs/items/13345.png",
    name: "Bloody Mary Míchané drinky výběr tří",
    price: "139 Kč",
  },
];

type Props = {
  title?: string;
  products?: {
    imageUrl: string;
    name: string;
    price: string;
  }[];
};

export const RecommendProductsBox: Component<Props> = (props) => {
  return (
    <div class='cart-recomend-box'>
      <h4 style={{ display: props.title ? "" : "none" }}>{props.title}</h4>
      <div style={{ display: props.products ? "" : "none" }} class='recomend-products-box'>
        <div class='recomend-products-overflow'>
          <For each={props.products}>
            {({ imageUrl, name, price }) => (
              <a href='#' class=''>
                <div class='recomend-product' style={{ "background-image": `url("${imageUrl}")` }}>
                  <div class='recomend-product-desc'>
                    <h4>{name}</h4>
                    <span class='js-recommended-price'>{price}</span>
                  </div>
                  <button
                    class='recomend-product-hover gradient-btn js-add-cart-one'
                    data-item-variation-id='18526'
                    data-recommended-index='0'
                  >
                    <div class='recomend-product-icon plus-icon'></div>
                  </button>
                </div>
              </a>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
