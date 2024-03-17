import { Component, For, Match, Switch } from "solid-js";

type Props = {
  galleries: {
    title: string;
    thumbnailUrl: string;
    videoCount: number;
    photoCount: number;
    lastUpdated: string;
  }[];
};

export const GalleryBox: Component<Props> = (props) => {
  const galleries = () => props.galleries ?? [];

  return (
    <div class='gallery-box'>
      <Switch>
        <Match when={galleries().length === 0}>
          <p class='no-content gallery-empty-msg'>Zatím nemáme nahrané žádné fotografie.</p>
        </Match>
        <Match when={galleries().length > 0}>
          <For each={galleries()}>
            {({ title, thumbnailUrl, videoCount, photoCount, lastUpdated }) => (
              <a href='#' class='' data-gallery-id='2'>
                <div
                  class='gallery-content'
                  style={{ "background-image": `url("${thumbnailUrl}")` }}
                >
                  <div class='gallery-date gradient-btn'>
                    Poslední změna <span class='js-last-edited'>{lastUpdated}</span>
                  </div>
                  <div class='gallery-bottom-content'>
                    <h4 class='js-gallery-name'>{title}</h4>
                    <label class='photo-icon'>
                      <span class='js-num-images'>{photoCount}</span> fotografií
                    </label>
                    <label class='movie-icon'>
                      <span class='js-num-videos'>{videoCount}</span> videí
                    </label>
                  </div>
                </div>
              </a>
            )}
          </For>
        </Match>
      </Switch>
    </div>
  );
};
