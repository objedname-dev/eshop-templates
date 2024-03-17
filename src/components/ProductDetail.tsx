import clsx from 'clsx';
import { Component, ComponentProps, For, JSXElement, Show, createSignal } from 'solid-js';

import { RecommendProductsBox } from './RecommendProductsBox';

type Props = {
  name: string;
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
  description?: string;
  packaging?: string;
  alergens?: number[];
  weight?: string;
  children?: JSXElement;
  recommendBox?: ComponentProps<typeof RecommendProductsBox>;
};

export const ProductDetail: Component<Props> = (props) => {
  const [isZoomed, setIsZoomed] = createSignal(false);
  const [selectedVariantIndex, setSelectedVariantIndex] = createSignal(0);
  const selectedVariant = () => props.variants[selectedVariantIndex()];

  return (
    <div class="item-detail-box">
      <div class="product-detail item-offer-listed" data-food-type="foodtype-pizza">
        <div class="content-detail">
          <div
            class={clsx('item-detail-photo-content', isZoomed() && 'zoomed')}
            style={{ 'background-image': `url(${props.imageUrl})` }}
            onClick={() => setIsZoomed((isZoomed) => !isZoomed)}
          >
            <div class="stickers-detail-content">
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
            <div class="favorite-food-box">
              <button
                class="favorite heart-icon"
                data-item-id="24097"
                data-item-variation-id="33227"
              ></button>
            </div>
            <h4 class="item-detail-name">{props.name}</h4>
          </div>
          <div class="item-info-panel">
            <div class="item-info-btn arrow-up-type">
              <select
                value={selectedVariantIndex()}
                onChange={(e) => {
                  setSelectedVariantIndex(parseInt(e.target.value));
                }}
                class="item-detail-selected-variation pencil-icon"
                style={{ display: props.variants?.length > 1 ? '' : 'none' }}
              >
                <For each={props.variants}>
                  {({ name }, index) => <option value={index()}>{name}</option>}
                </For>
              </select>
              <span
                class="js-selected-variation-name"
                style={{ display: props.variants?.length <= 1 ? '' : 'none' }}
              >
                {selectedVariant().name}
              </span>
            </div>
            <div class="item-info-btn inked item-detail-price">
              <h4>{selectedVariant().price}</h4>
            </div>
            <div class="item-info-btn item-info-avg-stars" title="Hodnocení">
              <div class="review-star review-stars-1"></div>
              <div class="review-star review-stars-2"></div>
              <div class="review-star review-stars-3"></div>
              <div class="review-star review-stars-4"></div>
              <div class="review-star review-stars-5"></div>

              <div class="cleaner" />
            </div>

            <div class="cleaner" />
          </div>
        </div>

        <div class="cleaner" />

        <div class="item-detail-desc-box">
          <Show when={props.packaging}>
            <div class="item-detail-label item-detail-package package-icon">{props.packaging}</div>
          </Show>

          <div class="select-content js-template js-pizza-base-template">
            <div class="select-title transport-icon js-name"></div>
            <div class="select-price">+ 0Kč</div>
            <div class="select-btn">
              <label class="label toggle">
                <input type="radio" name="radio-pizza-base" />
                <div class="toggle-control"></div>
              </label>
            </div>
            <div class="cleaner" />
          </div>

          <div class="js-item-scriptable-container" style="display:none;"></div>

          <div class="item-detail-label item-detail-description info-icon">{props.description}</div>

          <Show when={props.alergens}>
            <div class="item-detail-label item-detail-alergens wheat-icon">
              <For each={props.alergens}>{(alergen) => <div class="alergen-type">{alergen}</div>}</For>
              <div class="cleaner" />
            </div>
          </Show>

          <Show when={props.weight}>
            <div class="item-detail-label item-detail-weight weight-icon">{props.weight}</div>
          </Show>
        </div>

        <div class="add-cart-column js-buy-panel">
          <div class="add-cart-quantity js-quantity-box" style="display: block;">
            <div class="change-btn arrow-up-icon js-quantity-diff" data-diff-value="1"></div>
            <label class="add-to-cart js-quantity-label" data-quantity="1">
              1x
            </label>
            <div class="change-btn arrow-down-icon js-quantity-diff" data-diff-value="-1"></div>

            <div class="cleaner" />
          </div>
          <input class="add-to-cart js-add-to-cart-btn" type="button" value="Vložit do košíku" />
          <input
            class="add-to-cart-unavailable js-item-unavailable-btn"
            type="button"
            value="00:03:23"
            style="display: none;"
          />

          <div class="cleaner" />
        </div>

        <div class="social-box">
          <span>Nemůžete se rozhodnout? Nechte rozhodnout přátele!</span>

          <a class="social-btn js-facebook-share" href="#" target="_blank">
            <div class="social-btn-img facebook-icon"></div>
          </a>
          <a class="social-btn js-twitter-share" href="#" target="_blank">
            <div class="social-btn-img twitter-icon"></div>
          </a>
        </div>
      </div>
      <RecommendProductsBox {...props.recommendBox} />
    </div>
  );
};
