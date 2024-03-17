import { Component } from 'solid-js';

type Props = {
  title: string;
  date: string;
  description: string;
  onCloseBtnClick?: () => void;
};

export const NewsOverlay: Component<Props> = (props) => {
  return (
    <div class="slide new-box js-new">
      <div class="new-column">
        <a href="#" class="delete-btn js-close-new">
          <div class="delete-btn-icon delete-icon"></div>
          <div class="cleaner" />
        </a>
        <a href="#" class="new-content">
          <div class="new-title js-new-title fire-icon">{props.title}</div>
          <div class="new-date js-new-date">{props.date}</div>
          <p class="js-new-description">{props.description}</p>
        </a>
      </div>
    </div>
  );
};
