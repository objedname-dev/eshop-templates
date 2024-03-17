import clsx from 'clsx';
import { Component, For, Match, Switch, createSignal } from 'solid-js';

type ItemProps = {
  name: string;
  description?: string;
  imageUrl?: string;
  stickers?: {
    name: string;
    color?: string;
    className?: string;
  }[];
  variants: {
    name: string;
    price: string;
  }[];
};

type ItemsProps = {
  items: {
    title: string;
    description?: string;
    items: ItemProps[];
  }[];
};

export const Item: Component<ItemProps> = (props) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = createSignal(0);
  const selectedVariant = () => props.variants[selectedVariantIndex()];

  return (
    <div
      class="item js-home-items"
      data-item-type="782"
      data-item-id="13355"
      data-food-type="hamburger_burger"
      data-default-ordering="1"
    >
      <div class="content">
        <a
          href="#"
          class="js-show-detail js-no-follow"
          title="Detail položky"
          data-show-detail="13355"
          data-item-variation-id="18544"
        >
          <div
            class="item-photo-content"
            style={{
              'background-image': `url(${
                props.imageUrl ??
                'https://cdn.objedname.eu/user-data/factories/80/imgs/thumbs/default_thumb.jpg'
              })`,
            }}
          >
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
              <h4>{props.name}</h4>
              <p>{props.description}</p>
            </div>
          </div>
        </a>

        <div class="item-info-panel">
          <div class="item-info-btn">
            <Switch>
              <Match when={props.variants.length === 1}>{selectedVariant().name}</Match>
              <Match when={props.variants.length > 1}>
                <select
                  class="js-select-other arrow-up-type"
                  value={selectedVariantIndex()}
                  onChange={(e) => {
                    setSelectedVariantIndex(parseInt(e.target.value));
                  }}
                >
                  <For each={props.variants}>
                    {({ name }, index) => <option value={index()}>{name}</option>}
                  </For>
                </select>
              </Match>
            </Switch>
          </div>
          <div class="item-info-btn">
            <h4 class="js-item-variation-price">{selectedVariant().price} Kč</h4>
          </div>
          <div class="item-info-btn">
            <div class="review-star active"></div>
            <div class="review-star active"></div>
            <div class="review-star active"></div>
            <div class="review-star active"></div>
            <div class="review-star active"></div>
            <div class="cleaner"></div>
          </div>

          <div class="cleaner"></div>
        </div>
      </div>
      <a
        href="/share/80/Demo+Restaurace+Objedname.cz/18544/380g-Burger+Black+Tiger+s+Hranolkama"
        class="item-buy-btn gradient-btn js-show-detail js-no-follow"
        title="Detail položky"
        data-show-detail="13355"
        data-item-variation-id="18544"
      >
        <div class="item-buy-btn-icon"></div>
      </a>
      <div class="item-buy-now js-add-to-cart-btn" data-item-variation-id="18544" title="Koupit zrychleně">
        <div class="item-buy-now-icon"></div>
      </div>

      <div class="cleaner"></div>
    </div>
  );
};

export const Items: Component<ItemsProps> = (props) => {
  return (
    <div class="items">
      <For each={props.items}>
        {({ title, description, items }) => (
          <>
            <div
              data-default-ordering="0"
              data-item-type-header="782"
              class="js-home-items items-title"
              data-item-type="782"
            >
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <For each={items}>{(itemProps) => <Item {...itemProps} />}</For>
          </>
        )}
      </For>
      <div class="cleaner"></div>
    </div>
  );
};
