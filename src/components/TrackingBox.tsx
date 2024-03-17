import clsx from 'clsx';
import { Component, For } from 'solid-js';

export enum OrderStatus {
  NEW = 'new',
  CANCELLED = 'cancelled',
  CONFIRMED = 'confirmed',
  IN_DELIVERY = 'indelivery',
  DELIVERED = 'delivered',
}

type Props = {
  orders: {
    orderNumber?: string;
    status?: OrderStatus;
    statusMessage?: string;
    comment?: string;
  }[];
};

export const TrackingBox: Component<Props> = (props) => {
  return (
    <div class="js-order-tracking-box order-tracking-box" style={{ display: props.orders ? '' : 'none' }}>
      <For each={props.orders}>
        {({ orderNumber, status, statusMessage, comment }) => (
          <div class="js-order-tracking-order" data-order="7061889">
            <div class={clsx(`order-tracking-content order-tracking-${status}`)}>
              <div class="order-tracking-icon"></div>
              <br />
              <span class="paragon">Vaše objednávka č. {orderNumber}</span>
              <h3>{statusMessage}</h3>
              {comment}
            </div>
          </div>
        )}
      </For>
    </div>
  );
};
