import clsx from 'clsx';
import { Component, For, Show } from 'solid-js';

type Props = {
  foodTypes: {
    name: string;
    iconUrl?: string;
    className?: string;
    active?: boolean;
    subFoodTypes?: {
      name: string;
      active?: boolean;
    }[];
  }[];
  onFoodTypeClick?: (foodType: { index: number; type: 'main' | 'sub' }) => void;
};

export const FoodTypes: Component<Props> = (props) => {
  const activeFoodType = () =>
    (props.foodTypes ?? []).find(({ active }) => active === true);

  return (
    <div class="extended-menu">
      <ul class="food-types">
        <For each={props.foodTypes}>
          {({ name, iconUrl, className, active }, index) => (
            <li
              class={clsx('food-type-button', active && 'active', className)}
              data-filter-id=""
              onClick={() =>
                props?.onFoodTypeClick?.({ index: index(), type: 'main' })
              }
            >
              <Show when={iconUrl}>
                <img src={iconUrl} alt={name} />
              </Show>
              {name}
            </li>
          )}
        </For>
        <li class="food-type-button show-extra">Více</li>
        <li class="food-type-button hide-extra invisible">Méně</li>
      </ul>
      <ul
        class="food-types js-item-type-sub"
        style={{ display: activeFoodType()?.subFoodTypes ? '' : 'none' }}
      >
        <For each={activeFoodType()?.subFoodTypes}>
          {({ name, active }, index) => (
            <li
              class={clsx('food-type-button', active && 'active')}
              data-filter-id=""
              onClick={() =>
                props.onFoodTypeClick?.({ index: index(), type: 'sub' })
              }
            >
              {name}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
