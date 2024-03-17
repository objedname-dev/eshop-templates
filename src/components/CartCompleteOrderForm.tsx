import { Component, For } from "solid-js";
import { Toggle } from "./Toggle";
import clsx from "clsx";

type Props = {
  saveFormData?: boolean;
  onSaveFormDataCheck?: () => void;
  agreeWithTermsAndConditions?: boolean;
  onAgreeWithTermsAndConditionsCheck?: () => void;
  showAgreeWithTermsAndConditions?: boolean;
  isTimedOrder?: boolean;
  onIsTimedOrderCheck?: () => void;
  timedOrderData?: {
    date: string;
    data: {
      time: string;
      capacity: number;
      isEco?: boolean;
    }[];
  }[];
  showTimedOrderEcoMessage?: boolean;
};

export const CartCompleteOrderForm: Component<Props> = (props) => {
  return (
    <div class='cart-form-box'>
      <div class='field'>
        <input
          id='name'
          type='text'
          name='name'
          class='customer-icon input-invalid'
          placeholder='Jméno / Firma'
        />
        <label for='name'>Jméno / Firma</label>
      </div>
      <div class='field'>
        <input
          id='surmane'
          type='text'
          name='surname'
          class='customer-icon input-invalid'
          placeholder='Příjmení'
        />
        <label for='surmane'>Příjmení</label>
      </div>
      <div class='field'>
        <input id='email' type='text' name='email' class='email-icon' placeholder='Email' />
        <label for='email'>Email</label>
      </div>
      <div class='field'>
        <input
          id='telephone'
          type='tel'
          name='telephone'
          class='mobile-icon input-invalid'
          placeholder='Telefon'
        />
        <label for='telephone'>Telefon</label>
      </div>

      <div class='field'>
        <textarea id='note' name='note' maxlength='500' placeholder='Poznámka'></textarea>
        <label for='note'>Poznámka</label>
      </div>

      <div class='js-time-order-container'>
        <div
          class='save-data-box js-timed-order'
          style={{ display: props.timedOrderData ? "" : "none" }}
        >
          <div class='save-data-desc'>Objednávka na čas </div>

          <div class='save-data-checkbox order-time-checkbox js-preorder'>
            <Toggle
              type='checkbox'
              id='timeOrder'
              name='timeOrder'
              value='1'
              checked={props.isTimedOrder}
              onCheck={props.onIsTimedOrderCheck}
            />
          </div>
          <div class='clear' />
        </div>

        <div class='clear' />

        <div class='field js-timepicker' style={{ display: props.isTimedOrder ? "" : "none" }}>
          <input type='hidden' name='timed-order-selected-day' value='' />
          <input type='hidden' name='timed-order-selected-time' />

          <div
            class='timed-order-wrapper'
            data-id='timed-order-wrapper'
            style={{ display: props.isTimedOrder ? "" : "none" }}
          >
            <div class='day-select-row'>
              <div class='btn day' data-target='prev'>
                <img src='https://objedname.eu/ui/system/icons/gray/arrow_left.svg' />
              </div>
              <div class='day-select-row' data-id='day-select-row'>
                <For each={props.timedOrderData}>
                  {({ date }, index) => (
                    <div
                      class={clsx("day", index() === 1 && "active")}
                      data-template='day'
                      data-date={date}
                    >
                      <h5>{date}</h5>
                    </div>
                  )}
                </For>
              </div>
              <div class='btn day' data-target='next'>
                <img src='https://objedname.eu/ui/system/icons/gray/arrow_right.svg' />
              </div>
            </div>
            <div class='time-select-container' data-id='time-select-container'>
              <For each={props.timedOrderData?.[1].data}>
                {({ time, capacity, isEco }, index) => (
                  <div
                    class={clsx(
                      "time-select",
                      capacity === 0 && "disabled",
                      isEco && "eco",
                      index() === 0 && "active"
                    )}
                    data-template='time'
                    data-time={time}
                  >
                    <span>{time}</span>
                    {capacity === 0 && <span class='availability'>Nedostupné</span>}
                  </div>
                )}
              </For>
            </div>
            <p
              class='eco-message'
              style={{ display: props.showTimedOrderEcoMessage ? "" : "none" }}
              data-id='eco-message'
            >
              Eco jízda, někdo ve vašem okolí udělal na tento čas také objednávku.
            </p>
          </div>
        </div>
      </div>
      <div class='save-data-box'>
        <div class='save-data-desc'>Uložit data pro příště? </div>
        <div class='save-data-checkbox'>
          <Toggle
            type='checkbox'
            id='saveForms'
            name='saveForms'
            checked={props.saveFormData}
            onCheck={props.onSaveFormDataCheck}
          />
        </div>
        <div class='clear' />
      </div>

      <div
        class='save-data-box'
        style={{ display: props.showAgreeWithTermsAndConditions ?? true ? "" : "none" }}
      >
        <div class='save-data-desc'>
          Souhlasím s <a href='#company-terms'>obchodními podmínkami.</a>
        </div>
        <div class='save-data-checkbox'>
          <Toggle
            type='checkbox'
            id='rulesAgreementBox'
            name='rulesAgreementBox'
            checked={props.agreeWithTermsAndConditions}
            onCheck={props.onAgreeWithTermsAndConditionsCheck}
          />
        </div>
        <div class='clear' />
      </div>
    </div>
  );
};
