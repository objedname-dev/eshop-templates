import clsx from "clsx";
import { Component } from "solid-js";

type Props = {
  showDelivery?: boolean;
  deliveryPrice?: string;
  showCoupon?: boolean;
  bonusPoints?: number;
  totalPrice: number;
  nextBtnText: string;
  nextBtnDisabled?: boolean;
  onNextBtnClick: () => void;
};

export const CartSum: Component<Props> = (props) => {
  return (
    <div class='cart-sum'>
      {props.showDelivery && (
        <div class='cart-price-column'>
          <div class='cart-col-name'>Cena za dopravu</div>
          <div class='cart-col-value js-order-delivery-price'>{props.deliveryPrice}</div>
          <div class='cleaner' />
        </div>
      )}
      {typeof props.bonusPoints === "number" && (
        <div
          class={clsx(
            "cart-price-column",
            props.bonusPoints >= 0 ? "cart-bonus js-cart-bonus" : "js-cart-bonus-payment"
          )}
        >
          <div class='cart-col-name'>
            {props.bonusPoints >= 0 ? "Bonusové body" : "Platba body"}
          </div>
          <div class='cart-col-value js-order-bonus-gain'>
            {props.bonusPoints > 0 && "+"}
            {props.bonusPoints}
            {props.bonusPoints >= 0 ? " b." : " Kč"}
          </div>
          <div class='cleaner' />
        </div>
      )}
      <div class='js-cart-actions-container actions-container' style='display: none;'></div>
      <div class='cart-price-column cart-price'>
        <div class='cart-col-name'>Cena celkem</div>
        <div class='cart-col-value js-order-price'>{props.totalPrice}</div>
        <div class='cleaner' />
      </div>
      {props.showCoupon && (
        <div class='coupon-box js-add-coupon-box'>
          <div class='coupon-content'>
            <div class='field'>
              <input
                id='coupon'
                type='text'
                name='coupon'
                class='coupon-icon'
                placeholder='Kupón'
              />
              <label for='coupon'>Kupón</label>
            </div>
            <button class='set-coupon-btn js-add-coupon-btn'>Uplatnit</button>
            <div class='clear'></div>
          </div>
        </div>
      )}
      <div class='cart-bottom-btns'>
        <div class='cart-back-btn'>
          <a href='#' class='js-go-back js-no-submit'>
            Zpět
          </a>
        </div>
        <div class='cart-pay-btn'>
          <a
            href='#'
            class={clsx("js-go-next js-no-submit", props.nextBtnDisabled && "require-consent")}
            onClick={props.onNextBtnClick}
          >
            {props.nextBtnText}
          </a>
        </div>
        <div class='cleaner' />
      </div>
    </div>
  );
};
