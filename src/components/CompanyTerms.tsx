import { Component, JSXElement } from 'solid-js';

type Props = {
  terms?: JSXElement;
};

export const CompanyTerms: Component<Props> = (props) => {
  return (
    <div class="slide news-box" id="company-terms" style={{ display: 'block' }}>
      <button
        class="edit-cookies-btn gradient-btn"
        data-cc="show-preferencesModal"
        aria-haspopup="dialog"
      >
        Upravit souhlas s Cookies
      </button>
      <br />
      <h4>Obchodní podmínky</h4>
      <div>{props.terms}</div>
    </div>
  );
};
