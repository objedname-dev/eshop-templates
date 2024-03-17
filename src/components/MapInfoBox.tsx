import { Component, For } from 'solid-js';

type Props = {
  imageUrl: string;
  name: string;
  address: string;
  phone: string;
  businessHours: {
    title: string;
    timeFrom: string;
    timeTo: string;
  }[];
  openingHours: {
    title: string;
    timeFrom: string;
    timeTo: string;
  }[];
};

export const MapInfoBox: Component<Props> = (props) => {
  return (
    <div class="map-info-box">
      <div id="mapInfoContent">
        <div
          class="map-content-image"
          style={{ 'background-image': `url("${props.imageUrl}")` }}
        >
          <div class="map-content-title">
            <h4 class="js-factory-name">{props.name}</h4>
          </div>
        </div>
        <div class="map-bottom-panel">
          <div class="map-description">
            <p class="js-contact-address">{props.address}</p>
          </div>
          <div
            class="call-button gradient-btn js-start-navigation"
            data-gps-lng="18.286243"
            data-gps-lat="49.847174"
          >
            <div class="call-button-icon pointer-icon"></div>
            Navigovat
          </div>
          <div class="cleaner" />
        </div>
      </div>

      <div class="call-container">
        <div class="call-button-content">
          <h3 class="js-contact-telephone">{props.phone}</h3>
          <div
            class="call-button gradient-btn js-dial-call"
            data-phone-number={props.phone}
          >
            <div class="call-button-icon mobile-icon"></div>
            Zavolat
          </div>
        </div>
      </div>

      <div class="cleaner" />

      <h4>Otevírací hodiny</h4>
      <div class="js-business-hours">
        <For each={props.businessHours}>
          {({ title, timeFrom, timeTo }) => (
            <div class="open-hours-content">
              <div class="open-hours-D">{title}</div>
              <div class="open-hours-H">{`${timeFrom} - ${timeTo}`}</div>
              <div class="cleaner" />
            </div>
          )}
        </For>
      </div>

      <div class="open-hours-box">
        <div class="open-hours-content js-template js-opening-hours-template">
          <div class="open-hours-D"></div>
          <div class="open-hours-H"></div>
          <div class="cleaner" />
        </div>

        <h4>Doba přijímání objednávek!</h4>
        <div class="js-opening-hours">
          <For each={props.openingHours}>
            {({ title, timeFrom, timeTo }) => (
              <div class="open-hours-content">
                <div class="open-hours-D">{title}</div>
                <div class="open-hours-H">{`${timeFrom} - ${timeTo}`}</div>
                <div class="cleaner" />
              </div>
            )}
          </For>
        </div>

        <div class="cleaner" />
      </div>

      <div class="contact-form-container">
        <h4>Máte dotaz? Napište nám!</h4>
        <div class="contact-form-content js-contact-form">
          <form method="post" id="contact-form" action="#" data-factory="80">
            <div class="field">
              <input
                type="email"
                id="message-senders-email"
                name="message-senders-email"
                placeholder="Váš e-mail"
                required
              />
              <label for="message-senders-email">Váš e-mail</label>
            </div>
            <div class="field">
              <textarea
                name="message-text"
                id="message-text"
                placeholder="Váš dotaz..."
                required
              ></textarea>
              <label for="message-text">Váš dotaz...</label>
            </div>
            <div class="contact-bottom-panel">
              <select name="message-type">
                <option value="ORDINARY">Obecný dotaz</option>
                <option value="SUPPORT">Technický problém</option>
              </select>
            </div>

            <input
              type="submit"
              class="gradient-btn js-send-message-btn"
              value="Odeslat"
            />
          </form>

          <div class="cleaner" />

          <div class="message-responce-time-comment">
            Průměrně odpovídáme na technické dotazy do 24h.
          </div>
        </div>
      </div>

      <div class="cleaner" />
    </div>
  );
};
