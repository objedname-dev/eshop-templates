import $ from 'jquery';
import { Component, createEffect } from 'solid-js';

import { Toggle } from './Toggle';

export type DeliveryType = 'delivery' | 'pickup';
export type PaymentType = 'card' | 'cash';

type Props = {
  selectedDelivery: DeliveryType | null;
  onSelectDelivery: (selectedDelivery: DeliveryType) => void;
  selectedPayment: PaymentType | null;
  onSelectPayment: (selectedPayment: PaymentType) => void;
  isLoggedIn?: boolean;
  bonusPointsMin?: number;
  bonusPointsTotal?: number;
  bonusPointsPaymentTotal?: number;
  onPlusBonusPoint: () => void;
  onMinusBonusPoint: () => void;
  onAllBonusPoints: () => void;
};

export const CartDeliveryForm: Component<Props> = (props) => {
  let addressContainerEl: HTMLDivElement;
  let tringleWrapperEl: HTMLDivElement;

  const bonusPointsMin = () => props.bonusPointsMin ?? 1;
  const bonusPointsTotal = () => props.bonusPointsTotal ?? 0;
  const bonusPointsPaymentTotal = () => props.bonusPointsPaymentTotal ?? 0;
  const bonusPointsRemaining = () =>
    bonusPointsTotal() - bonusPointsPaymentTotal() <= 0
      ? 0
      : bonusPointsTotal() - bonusPointsPaymentTotal();

  createEffect(() => {
    if (props.selectedDelivery === 'delivery') {
      $(addressContainerEl).slideDown();
    }
    if (props.selectedDelivery === 'pickup' || !props.selectedDelivery) {
      $(addressContainerEl).slideUp();
    }
  });

  createEffect(() => {
    if (props.selectedPayment === 'cash') {
      $(tringleWrapperEl).slideDown();
    }
    if (props.selectedPayment === 'card' || !props.selectedDelivery) {
      $(tringleWrapperEl).slideUp();
    }
  });

  return (
    <>
      <div class="preorder-data-box" style="display:none">
        <div class="preorder-desc">Předobjednat na daný den a čas</div>
        <div class="preorder-checkbox">
          <Toggle
            type="checkbox"
            id="preorder"
            name="preorder"
            onCheck={() => props.onSelectDelivery?.('pickup')}
          />
        </div>
        <div class="clear" />
      </div>
      <div class="js-preorder-fields" style="display:none">
        <div class="field">
          <select class="delivery-preorder-date"></select>
          <label for="delivery-preorder-date">Datum</label>
        </div>
        <div class="field">
          <select class="delivery-preorder-time"></select>
          <label for="delivery-preorder-time">Čas</label>
        </div>
      </div>

      <div class="select-content-box js-delivery-container">
        <div class="select-content delivery-icon-address">
          <div class="extended-title transport-icon js-delivery-name">
            Rozvoz
          </div>
          <div class="extended-price js-delivery-price">Dle adresy</div>
          <div class="select-btn">
            <Toggle
              name="radio-delivery"
              value="151"
              checked={props.selectedDelivery === 'delivery'}
              onCheck={() => props.onSelectDelivery?.('delivery')}
            />
          </div>
          <div class="cleaner"></div>
          <div class="select-address" style="display: none;"></div>
        </div>
        <div class="select-content delivery-icon-factory">
          <div class="extended-title transport-icon js-delivery-name">
            Osobní odběr
          </div>
          <div class="extended-price js-delivery-price">0 Kč</div>
          <div class="select-btn">
            <Toggle
              name="radio-delivery"
              value="750"
              checked={props.selectedDelivery === 'pickup'}
              onCheck={() => props.onSelectDelivery?.('pickup')}
            />
          </div>
          <div class="cleaner"></div>
          <div class="select-address" style="display: none;"></div>
        </div>
      </div>
      <div ref={addressContainerEl!} class="js-address-container" style="">
        <div
          class="address-error-box js-address-error"
          style="display: none;"
        ></div>
        <div class="field">
          <input
            id="street"
            type="text"
            name="street"
            class="pointer-icon ui-autocomplete-input input-invalid"
            autocomplete="off"
            placeholder="Ulice"
          />
          <label for="street">Ulice</label>
        </div>
        <div class="field">
          <input
            id="city"
            type="text"
            name="city"
            class="pointer-icon"
            autocomplete="off"
            placeholder="Město"
          />
          <label for="city">Město</label>
        </div>
        <input type="hidden" name="gpslon" value="0" />
        <input type="hidden" name="gpslat" value="0" />

        <div class="field">
          <input
            id="postcode"
            type="tel"
            pattern="[0-9]*"
            name="postcode"
            class="pointer-icon"
            autocomplete="off"
            placeholder="PSČ"
          />
          <label for="postcode">PSČ</label>
        </div>
      </div>

      <h4>Výběr platby</h4>

      <div class="select-content-box js-payment-container">
        <div class="select-content payment-icon-card">
          <div class="extended-title cash-icon js-payment-name">Kartou</div>
          <div class="extended-price js-payment-price">0 Kč</div>
          <div class="select-btn">
            <Toggle
              name="radio-payment"
              value="300"
              checked={props.selectedPayment === 'card'}
              onCheck={() => props.onSelectPayment?.('card')}
            />
          </div>
          <div class="cleaner"></div>
        </div>
        <div class="select-content payment-icon-cash">
          <div class="extended-title cash-icon js-payment-name">Hotově</div>
          <div class="extended-price js-payment-price">0 Kč</div>
          <div class="select-btn">
            <Toggle
              name="radio-payment"
              value="302"
              checked={props.selectedPayment === 'cash'}
              onCheck={() => props.onSelectPayment?.('cash')}
            />
          </div>
          <div class="cleaner"></div>
        </div>
      </div>
      <div class="select-content-box">
        <div ref={tringleWrapperEl!} class="field" style="display: none;">
          <input
            id="tringel"
            type="number"
            name="tringel"
            min="0"
            max="10000"
            step="0.01"
            class="pointer-icon"
            placeholder="Spropitné"
          />
          <label for="tringel">Spropitné</label>
        </div>
      </div>
      <div class="bonus-points-box">
        <div
          class="bonus-points-content js-bonus-payments-unlogged-box"
          style={{ display: props.isLoggedIn ? 'none' : '' }}
        >
          <div class="bonus-points-head">
            <h4>Platba body</h4>
            <span>Pro uplatnění se prosím přihlašte.</span>
          </div>
          <div class="bonus-points-center-class">
            <a
              class="bonus-points-href-btn btn-href gradient-btn"
              data-navigation-target="#account-settings"
            >
              Přihlásit se
            </a>
          </div>
        </div>
        <div
          class="bonus-points-content js-bonus-payments-box"
          style={{ display: props.isLoggedIn ? '' : 'none' }}
        >
          <div class="bonus-points-head">
            <h4>Platba body</h4>
            <span class="js-bonus-points-min-msg">
              Minimální částka je{' '}
              <span class="js-bonus-min-amount">{bonusPointsMin()}</span> bodů.
            </span>
            <span>1 bod = 1 Kč</span>
          </div>
          <div class="bonus-points-controller">
            <div class="bonus-points-remain bonus-points-icon">
              Zůstatek:{' '}
              <span class="js-bonus-balance">{bonusPointsRemaining()}</span>{' '}
              bodů
            </div>
            <div class="bonus-points-controll-panel">
              <div
                class="bonus-points-btn minus-icon js-quantity-diff"
                data-diff-value="-1"
              ></div>
              <div class="bonus-points-value">
                <h4 class="js-bonus-payment-amount">0</h4> <span>bodů</span>
              </div>
              <div
                class="bonus-points-btn plus-icon js-quantity-diff"
                data-diff-value="1"
              ></div>

              <div class="clear" />
            </div>
            <div class="bonus-points-center-class">
              <a class="bonus-points-href-btn btn-href gradient-btn js-bonus-pay-all">
                Zaplatit celý nákup
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
