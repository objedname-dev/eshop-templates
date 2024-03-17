import { Component } from 'solid-js';

type Props = {
  pointsCount: number;
};

export const Account: Component<Props> = (props) => {
  return (
    <div class="login-wrapper account-image hw-acc" id="js-account-settings">
      <div class="account-content">
        <div class="account-inform-col">
          <div class="account-info-circle gradient-btn">
            <div class="account-info-center">
              <h4 class="js-account-num-points">{props.pointsCount}</h4>
              <label>bodů</label>
            </div>
          </div>
        </div>
        <div class="account-form-box">
          <a
            href="#"
            class="js-no-submit js-account-continue-to-home btn-href gradient-btn"
          >
            Pokračovat na hlavní nabídku
          </a>
          <a href="#" class="js-no-submit js-logout btn-href gradient-btn">
            Odhlásit
          </a>
        </div>
      </div>
    </div>
  );
};
