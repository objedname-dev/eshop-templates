import { Component, For } from 'solid-js';

type Props = {
  minibanners: string[];
};

export const Minibanners: Component<Props> = (props) => {
  return (
    <div class="mini-banners-box">
      <For each={props.minibanners}>
        {(minibannerUrl) => (
          <div class="minibanner">
            <img src={minibannerUrl} width="100%" />
          </div>
        )}
      </For>
      <div class="clear"></div>
    </div>
  );
};
