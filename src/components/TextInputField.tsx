import { Component, JSX, splitProps } from 'solid-js';

type Props = {
  label?: string;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

export const TextInputField: Component<Props> = (props) => {
  const [{ label }, rest] = splitProps(props, ['label']);

  return (
    <div class="field">
      <input type="text" {...rest} />
      <label>{label}</label>
    </div>
  );
};
