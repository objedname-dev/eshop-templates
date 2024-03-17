import { Component, For, Show } from 'solid-js';

export const paymentMethods = [
  'mastercard',
  'visa',
  'gpwebpay',
  'maestro',
  'b-payment',
  'gopay',
  'ticket',
  'nase-stravenka',
  'edenred',
  'sodexo',
  'up',
] as const;

export const socials = ['fb', 'instagram', 'twitter', 'google_companies', 'seznam_firmy'] as const;

type PaymentMethod = (typeof paymentMethods)[number];
type Social = (typeof socials)[number];

type Props = {
  logoUrl: string;
  address: string;
  phone: string;
  showSelectFactory?: boolean;
  socialLinks?: Social[];
  paymentMethods?: PaymentMethod[];
  openingHours: {
    title: string;
    timeFrom: string;
    timeTo: string;
  }[];
  showGooglePlay?: boolean;
  showAppStore?: boolean;
};

export const Footer: Component<Props> = (props) => {
  return (
    <footer>
      <div class="footer-box">
        <div class="footer-content">
          <div class="footer-logo" style={{ 'background-image': `url(${props.logoUrl})` }}></div>
          <div class="footer-column">
            <div class="footer-33-col">
              <h4>Adresa:</h4>
              <p>{props.address}</p>

              <div class="footer-payment-box">
                <h4>Akceptujeme:</h4>
                <div class="footer-payment-content">
                  <For each={props.paymentMethods}>
                    {(paymentMethod) => (
                      <div class={`footer-payment-type ${paymentMethod}-accepted-payment`} />
                    )}
                  </For>
                </div>
              </div>
            </div>
            <div class="footer-33-col">
              <h4>Telefon:</h4>
              <a href={`tel:${props.phone}`} class="footer-info-btn">
                {props.phone}
              </a>
              <div class="social-links">
                <For each={props.socialLinks}>
                  {(social) => (
                    <a href="#" class={`social-link social-icon-${social}`}>
                      &nbsp;
                    </a>
                  )}
                </For>
              </div>
              <Show when={props.showSelectFactory}>
                <div class="footer-factory-select-content">
                  <a href="#" class="footer-select-factory js-multiapp-choose">
                    <div class="footer-select-factory-icon"></div>
                    Výběr provozovny
                  </a>
                </div>
              </Show>
            </div>
            <div class="footer-33-col">
              <h4>Otevírací doba:</h4>

              <For each={props.openingHours}>
                {({ title, timeFrom, timeTo }) => (
                  <div class="open-hours-content">
                    <div class="open-hours-D">{title}</div>
                    <div class="open-hours-H">{`${timeFrom} - ${timeTo}`}</div>
                    <div class="cleaner" />
                  </div>
                )}
              </For>

              <div class="cleaner" />
            </div>

            <div class="cleaner" />
          </div>
          <div class="footer-app-content">
            <Show when={props?.showAppStore}>
              <a href="#" class="appstore" />
            </Show>
            <Show when={props?.showGooglePlay}>
              <a href="#" class="googleplay" />
            </Show>
          </div>
        </div>
        <div class="footer-author">
          <a href="#">Vytvořil tým Objednáme.cz</a>
        </div>
      </div>
    </footer>
  );
};
