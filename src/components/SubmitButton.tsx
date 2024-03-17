import { Component, JSX } from 'solid-js';

type Props = JSX.InputHTMLAttributes<HTMLInputElement>;

export const SubmitButton: Component<Props> = (props) => {
  return <input type="submit" {...props} />;
};
