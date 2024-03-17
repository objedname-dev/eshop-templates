import { Component, Match, Switch } from 'solid-js';

type Props = {
  step: number;
};

export const Login: Component<Props> = (props) => {
  return (
    <div class="login-wrapper login-image" id={`login-step-${props.step}`}>
      <div class="login-content">
        <h3>Přihlášení</h3>
        <Switch>
          <Match when={props.step === 1}>
            <p class="desc-article">
              Přihlašte se pomocí e-mailu a ušetříte tak čas při nakupování
            </p>
            <form class="login-frm">
              <div class="field">
                <input
                  type="text"
                  class="email-icon"
                  title="E-mail"
                  name="ilogin-email"
                  id="ilogin-email"
                  placeholder="Váš e-mail"
                />
                <label for="ilogin-email">Váš e-mail</label>
              </div>

              <input
                type="submit"
                class="gradient-btn js-no-submit"
                title="Odeslat párovací kód"
                value="Odeslat párovací kód"
              />
            </form>
            <div class="login-article-column">
              <span>Máte již párovací kód? Přihlašte se </span>
              <a href="#" class="goto-pair">
                zde.
              </a>
            </div>
          </Match>
          <Match when={props.step === 2}>
            <p class="desc-article">
              Přihlašte se pomocí párovacího kódu, který jste obdrželi v emailu.
            </p>
            <form class="pair-frm">
              <div class="field">
                <input
                  type="text"
                  class="calculator-icon"
                  title="Párovací kód"
                  name="ipair-code"
                  id="ipair-code"
                  maxlength="14"
                  placeholder="Párovací kód"
                />
                <label for="ipair-code">Párovací kód</label>
              </div>

              <input
                type="submit"
                class="gradient-btn js-no-submit"
                title="Přihlásit se"
                value="Přihlásit se"
              />
            </form>
            <div class="login-article-column">
              <span>Nepřišel vám email? Pošlete si nový </span>
              <a href="#" class="goto-login">
                zde.
              </a>
            </div>
          </Match>
        </Switch>
      </div>
      <a href="#" data-navigation-target="#home" class="bottom-href">
        Pokračovat bez přihlášení &gt;&gt;
      </a>
    </div>
  );
};
