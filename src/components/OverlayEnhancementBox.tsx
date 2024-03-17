import clsx from 'clsx';
import { Component, For, Match, Switch, createSignal } from 'solid-js';

import { Toggle } from './Toggle';

type Props = {
  isOpen?: boolean;
  isConfigurator?: boolean;
  enhancements: {
    name: string;
    type: 'radio' | 'checkbox';
    className?: string;
    ingredients: {
      name: string;
      price: string;
      imageUrl?: string;
    }[];
  }[];
  configuredEnhancements?: {
    name: string;
    price: string;
    count: number | null;
  }[];
  totalConfiguredPrice: string;
};

export const OverlayEnhancementBox: Component<Props> = (props) => {
  const [selectedIngredientTypeIndex, setSelectedIngredientTypeIndex] = createSignal(0);

  return (
    <div
      class={clsx(
        'overlay-enhancement-box js-item-enhancement-box',
        props.isOpen && 'active',
        props.isConfigurator && 'configurator-layout',
      )}
    >
      <div class="overlay-enhancement-content">
        <a class="gradient-btn delete-btn hw-acc js-enhancement-close">X</a>

        <div class="enhancement-header">Vylepšete si</div>

        <div class="extended-menu-taste">
          <ul class="ingredient-types">
            <For each={props.enhancements}>
              {({ name, className }, index) => (
                <li
                  data-ingredient-type="1207"
                  class={clsx(
                    'ingredient-type-button ingredient-type-others',
                    index() === selectedIngredientTypeIndex() && 'active',
                    className,
                  )}
                  onClick={() => setSelectedIngredientTypeIndex(index())}
                >
                  {name}
                </li>
              )}
            </For>
          </ul>
        </div>

        <div class="enhancement-box">
          <div class="extended-content-box">
            <For each={props.enhancements}>
              {({ type, ingredients }, index) => (
                <div style={{ display: index() === selectedIngredientTypeIndex() ? '' : 'none' }}>
                  <For each={ingredients}>
                    {({ name, price, imageUrl }) => (
                      <Switch>
                        <Match when={type === 'radio'}>
                          <div
                            class="select-content"
                            data-ingredient-id="6803"
                            data-variation-id="18544"
                            style={{ 'background-image': `url('${imageUrl}')` }}
                          >
                            <div class="extended-title js-name">{name}</div>
                            <div class="extended-price">{price}</div>
                            <div class="select-btn">
                              <Toggle
                                name="radio-enhancement-one-allowed-1207"
                                class="js-enhancement-radio"
                              />
                            </div>
                            <div class="cleaner" />
                          </div>
                        </Match>
                        <Match when={type === 'checkbox'}>
                          <div
                            class="extended-content-taste"
                            data-ingredient-id="2224"
                            data-variation-id="18544"
                          >
                            <a
                              href="#"
                              class="extend-qantity-btn arrow-down-icon js-ingredient-quantity-diff"
                              data-diff-value="-1"
                            ></a>
                            <div class="extended-column" style={{ 'background-image': `url('${imageUrl}')` }}>
                              <span class="extended-title">{name}</span>
                              <span class="extended-quantity">0x</span>
                              <span class="extended-price">{price}</span>
                              <div class="cleaner" />
                            </div>
                            <a
                              href="#"
                              class="extend-qantity-btn arrow-up-icon js-ingredient-quantity-diff"
                              data-diff-value="1"
                            ></a>
                            <div class="cleaner" />
                          </div>
                        </Match>
                      </Switch>
                    )}
                  </For>
                </div>
              )}
            </For>
          </div>
        </div>

        <div class="cart-bottom-btns hw-acc">
          <div class="cart-back-btn">
            <a href="#" class="js-no-submit js-continue-shopping">
              Do košíku a nakupovat dále
            </a>
          </div>
          <div class="cart-pay-btn">
            <a href="#" class="js-no-submit js-go-to-cart">
              Do košíku
            </a>
          </div>
          <div class="cleaner" />
        </div>
      </div>
      <div class="configurator-render-box">
        <a class="gradient-btn delete-btn hw-acc js-enhancement-close">X</a>
        <div class="configurator-item-price">
          <span class="js-enhanced-item-price">{props.totalConfiguredPrice}</span>
        </div>
        <div class="configurator-contain-ingredients js-enhancement-added-ingredient-list">
          <For each={props.configuredEnhancements}>
            {({ name, count, price }) => (
              <div class="contain-ingredient" data-add-id="0">
                <div class="contain-ingredient-title js-title">{name}</div>
                <div
                  class="contain-ingredient-quantity js-quantity"
                  style={{ display: count === null ? 'none' : '' }}
                >
                  {count}x
                </div>
                <div class="contain-ingredient-price js-price">{price}</div>
                <button
                  class="contain-ingredient-delete-btn js-delete-btn"
                  data-ingredient-id="10073"
                  data-variation-id="48605"
                ></button>
                <div class="cleaner" />
              </div>
            )}
          </For>
        </div>
        <div class="configurator-render-img">
          <img
            src="https://objedname.eu/user-data/factories/80/configurator/render_2d/bezlepkovetesto.png"
            data-render-state-id="10073"
            data-z-index="0"
          />
        </div>
      </div>
    </div>
  );
};
