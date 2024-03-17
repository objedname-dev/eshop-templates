import { Component, ComponentProps, For } from "solid-js";
import { FavoriteItem } from "./FavoriteItem";

type Props = {
  items: ComponentProps<typeof FavoriteItem>[];
};

export const FavoriteItemsBox: Component<Props> = (props) => {
  return (
    <div class='favorite-items-box'>
      <h4 class='favorite-title'>Oblíbené</h4>

      <p
        class='no-content no-favorite-icon'
        id='favorites-no-favorites-yet'
        style={{ display: (props.items ?? [])?.length === 0 ? "" : "none" }}
      >
        Zatím nemáte žádné položky oblíbené.
      </p>

      <div class='favorite-items-container'>
        <For each={props.items ?? []}>{(item) => <FavoriteItem {...item} />}</For>
      </div>
    </div>
  );
};
