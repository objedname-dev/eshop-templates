import { Component, For } from 'solid-js';

type Props = {
  areas: {
    color: string;
    label: string;
    type: 'fixed' | 'free';
  }[];
};

export const MapLegend: Component<Props> = (props) => {
  return (
    <div id="legend">
      <h3>Legenda</h3>
      <For each={props.areas}>
        {({ color, label, type }) => (
          <div>
            <div class="legend-color-box" style={{ 'background-color': color }}>
              &nbsp;
            </div>
            <span class={`legend-price-${type}`}>{label}</span>
          </div>
        )}
      </For>
    </div>
  );
};
