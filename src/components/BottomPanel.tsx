import { Component, mergeProps } from "solid-js";
import clsx from "clsx";

type Props = {
  showPoints?: boolean;
  pointsCount?: number;
  cartItemsCount?: number;
};

export const BottomPanel: Component<Props> = (props) => {
  props = mergeProps({ showPoints: true, pointsCount: 0, cartItemsCount: 0 }, props);

  return (
    <div class='bottom-panel hw-acc'>
      <div
        class='bottom-btn orders-icon'
        data-navigation-target='#orders-history'
        title='Historie objednávek'
      ></div>
      <div
        class='bottom-btn favorite-food'
        data-navigation-target='#favorite-items'
        title='Oblíbené položky'
      ></div>
      <div
        class={clsx("bottom-btn-cart js-cart-floating", props.cartItemsCount === 0 && "empty")}
        data-navigation-target='#cart'
        title='Košík'
      >
        <h4>{props.cartItemsCount}</h4>
      </div>
      <div
        class='bottom-btn customer-icon'
        data-navigation-target='#account-settings'
        title='Váš účet'
      ></div>
      <div
        class='bottom-btn points'
        data-navigation-target='#account-settings'
        title='Bonusové body'
        style={{ display: props.showPoints ? "" : "none" }}
      >
        <div class='bottom-btn-center'>
          <h4>{props.pointsCount}</h4>
          <label>bodů</label>
        </div>
      </div>
      <div class='cleaner'></div>
    </div>
  );
};
