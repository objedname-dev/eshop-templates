import { Component, JSX } from 'solid-js';

type Props = JSX.InputHTMLAttributes<HTMLInputElement>;

export const TextInput: Component<Props> = (props) => {
  return <input type="text" {...props} />;
};
