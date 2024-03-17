import { Component, JSX } from 'solid-js';

type Props = JSX.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: Component<Props> = (props) => {
  return <textarea {...props} />;
};
