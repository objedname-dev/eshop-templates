import { Component, For, Match, Switch } from 'solid-js';

import { BackButton } from './BackButton';

type Media = {
  type: 'img' | 'iframe';
  mediaUrl: string;
};

const GalleryColumn: Component<{ media: Media[] }> = (props) => {
  return (
    <For each={props.media}>
      {(media) => (
        <a href={media.mediaUrl} data-lightbox="gallery-0">
          <Switch>
            <Match when={media.type === 'img'}>
              <img src={media.mediaUrl} />
            </Match>
            <Match when={media.type === 'iframe'}>
              <iframe src={media.mediaUrl} allowfullscreen></iframe>
            </Match>
          </Switch>
        </a>
      )}
    </For>
  );
};

type Props = {
  title: string;
  left?: Media[];
  right?: Media[];
};

export const GalleryPhotoDetail: Component<Props> = (props) => {
  return (
    <div class="gallery-photo-detail">
      <BackButton />
      <div class="photo-content-left">{props.left && <GalleryColumn media={props.left} />}</div>
      <div class="photo-content-right">{props.right && <GalleryColumn media={props.right} />}</div>

      <div class="cleaner" />

      <div class="gallery-name-title">{props.title}</div>
    </div>
  );
};
