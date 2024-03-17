import { Component, For } from 'solid-js';

type CartItemProps = {
  name: string;
  imageUrl: string;
  variant: {
    name: string;
    price: string;
  };
  packagingPrice: string;
  count: number;
  onMinusBtnClick?: () => void;
  onPlusBtnClick?: () => void;
};

export const CartItem: Component<CartItemProps> = (props) => {
  return (
    <div class="item item-offer-listed" data-cart-id="5" data-order-weight="1">
      <a href="#" class="product-delete-btn js-delete-item js-remove-cart-item">
        <div class="product-delete-icon delete-icon"></div>
      </a>
      <div class="content">
        <div
          class="item-photo-content"
          style='background-image: url("/user-data/factories/80/imgs/thumbs/13348.jpg");'
        >
          <div class="stickers-content"></div>
          <div class="item-photo-content-bottom">
            <h4>{props.name}</h4>
          </div>
        </div>
        <div class="item-info-panel">
          <div class="item-info-btn js-cart-item-variation">
            {props.variant.name}
          </div>
          <div class="item-info-btn inked js-cart-item-price">
            {props.variant.price}
          </div>
          <div class="item-info-btn">
            <div class="package-item-cart">{props.packagingPrice}</div>
          </div>

          <div class="cleaner" />
        </div>
      </div>
      <div class="item-change-btn">
        <div
          class="change-btn plus-icon js-quantity-diff"
          data-diff-value="1"
          onClick={props.onPlusBtnClick}
        />
        <span class="js-quantity-label" data-quantity="1">
          {props.count}x
        </span>
        <div
          class="change-btn minus-icon js-quantity-diff"
          data-diff-value="-1"
          onClick={props.onMinusBtnClick}
        />
      </div>

      <div class="cleaner" />

      <div class="item-taste-box" style="display: none;">
        <span class="ing-plus"></span>
        <span class="ing-minus"></span>
      </div>
    </div>
  );
};

type CartItemsProps = {
  items: CartItemProps[];
};

export const CartItems: Component<CartItemsProps> = (props) => {
  return (
    <div class="cart-items js-cart-items">
      <div class="cleaner" />
      <For each={props.items}>{(item) => <CartItem {...item} />}</For>
    </div>
  );
};
