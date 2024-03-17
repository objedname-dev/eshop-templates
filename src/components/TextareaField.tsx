import { Component, JSX } from 'solid-js';

type Props = {
  label?: string;
} & JSX.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaField: Component<Props> = (props) => {
  return (
    <div class="field">
      <textarea {...props} />
      <label>{props.label}</label>
    </div>
  );
};
