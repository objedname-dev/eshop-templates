import { Component, JSX } from 'solid-js';

type Props = JSX.SelectHTMLAttributes<HTMLSelectElement>;

export const Select: Component<Props> = (props) => {
  return <select {...props} />;
};
