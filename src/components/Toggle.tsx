import { Component, JSX, splitProps } from "solid-js";

type Props = {
  checked?: boolean;
  onCheck?: () => void;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

export const Toggle: Component<Props> = (props) => {
  const [, rest] = splitProps(props, ["checked", "onCheck"]);

  return (
    <label class='label toggle'>
      <input type='radio' checked={props.checked} onClick={props.onCheck} {...rest} />
      <div class='toggle-control'></div>
    </label>
  );
};
