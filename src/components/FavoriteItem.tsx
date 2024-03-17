import clsx from 'clsx';
import { Component, For } from 'solid-js';

type Props = {
  name: string;
  imageUrl?: string;
  stickers?: {
    name: string;
    color?: string;
    className?: string;
  }[];
  variant: {
    name: string;
    price: string;
  };
};

export const FavoriteItem: Component<Props> = (props) => {
  return (
    <div class="item item-offer-listed">
      <div class="content">
        <a
          href="#"
          class="js-show-detail js-no-follow"
          data-show-detail="13349"
          data-item-variation-id="18535"
        >
          <div class="item-photo-content" style={{ 'background-image': `url("${props.imageUrl}")` }}>
            <div class="stickers-content">
              <For each={props.stickers}>
                {({ name, className, color }) => (
                  <div
                    class={clsx('sticker', color && 'sticker-custom', className)}
                    style={color ? { 'background-color': color } : undefined}
                  >
                    {name}
                  </div>
                )}
              </For>
            </div>
            <div class="item-photo-content-bottom">
              <h4 class="js-item-name">{props.name}</h4>
            </div>
          </div>
        </a>
        <div class="item-info-panel">
          <div class="item-info-btn js-item-variation-name">{props.variant.name}</div>
          <div class="item-info-btn inked">
            <h4 class="js-item-price">{props.variant.price}</h4>
          </div>
          <div class="item-info-btn">
            <a
              href="#"
              class="js-no-submit favorite-item-btn heart-icon-active"
              data-item-id="13349"
              data-item-variation-id="18535"
            ></a>
          </div>
          <div class="cleaner" />
        </div>
      </div>
      <div
        class="item-buy-btn gradient-btn"
        title="Detail položky"
        data-show-detail="13349"
        data-show-detail-variation="18535"
      >
        <div class="item-buy-btn-icon"></div>
      </div>
      <div class="item-buy-now" title="Koupit zrychleně" data-item-id="13349" data-item-variation-id="18535">
        <div class="item-buy-now-icon"></div>
      </div>
      <div class="cleaner" />
    </div>
  );
};
