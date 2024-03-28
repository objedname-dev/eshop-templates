import { Component, JSX, JSXElement, splitProps } from 'solid-js';

type Props = {
  children?: JSXElement;
} & JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

export const BackButton: Component<Props> = (props) => {
  const [{ children }, rest] = splitProps(props, ['children']);

  return (
    <a href="#" class="gradient-btn btn-href back-btn js-no-follow" {...rest}>
      <div class="btn-icon arrow-left-icon"></div>
      {children ?? 'Zpět'}
      <div class="cleaner" />
    </a>
  );
};
