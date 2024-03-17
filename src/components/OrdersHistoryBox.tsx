import { Component, For, Match, Switch } from "solid-js";

type OrderHisColumnProps = {
  date: string;
  address: string;
  status: string;
  items: {
    name: string;
    count: number;
    price: string;
  }[];
  totalPrice: string;
};

export const OrderHisColumn: Component<OrderHisColumnProps> = (props) => {
  return (
    <div class='order-his-column' data-order-id='1'>
      <div class='order-his-top'>
        <div class='order-his-date js-order-date'>{props.date}</div>
        <div class='order-his-status'>{props.status}</div>
        <div class='cleaner' />
        <div class='order-his-adress js-order-address'>{props.address}</div>
      </div>
      <div class='order-his-list js-order-items'>
        <For each={props.items}>
          {({ name, count, price }) => (
            <div class='order-his-product'>
              <div class='order-title js-oi-title'>{name}</div>
              <div class='order-quantity js-oi-quantity'>{count}x</div>
              <div class='order-price js-oi-price'>{price}</div>
              <div class='cleaner' />
              <div class='order-extended js-oi-extension' />
            </div>
          )}
        </For>
      </div>
      <div class='order-his-bottom'>
        <div class='order-his-price'>
          <h4 class='js-orders-history-price'>{props.totalPrice}</h4>
          <label>Cena celkem</label>
        </div>
        <div class='order-his-btn gradient-btn'>
          <button class='js-order-reorder repeat-icon' title='Znovu objednat'></button>
        </div>
      </div>
    </div>
  );
};

type OrdersHistoryBoxProps = {
  orders: OrderHisColumnProps[];
};

export const OrdersHistoryBox: Component<OrdersHistoryBoxProps> = (props) => {
  const orders = () => props.orders ?? [];

  return (
    <div class='orders-history-box'>
      <h4>Historie nákupů</h4>
      <p>Znovu objednat lze pouze objednávky s položkami, které jsou nyní dostupné.</p>

      <div class='js-orders-history-container'>
        <Switch>
          <Match when={orders().length === 0}>
            <p class='no-content no-orders-icon'>Bohužel nemáte žádné objednávky v historii.</p>
          </Match>
          <Match when={orders().length > 0}>
            <For each={orders()}>{(order) => <OrderHisColumn {...order} />}</For>
          </Match>
        </Switch>
      </div>
      <div class='cleaner' />
    </div>
  );
};
