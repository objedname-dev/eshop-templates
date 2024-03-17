import { Component, JSXElement } from 'solid-js';

type Props = {
  children?: JSXElement;
};

export const BackButton: Component<Props> = (props) => {
  return (
    <a href="#" class="gradient-btn btn-href back-btn js-no-follow">
      <div class="btn-icon arrow-left-icon"></div>
      {props.children ?? 'Zpět'}
      <div class="cleaner" />
    </a>
  );
};
