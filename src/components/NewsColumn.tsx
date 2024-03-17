import { Component, For } from "solid-js";

type NewContentProps = {
  title: string;
  date: string;
  description: string;
};

export const NewContent = (props: NewContentProps) => {
  return (
    <a href='#' class='news-content'>
      <div class='news-title js-news-title fire-icon'>{props.title}</div>
      <div class='news-date js-news-date'>{props.date}</div>
      <p class='js-news-description'>{props.description}</p>
    </a>
  );
};

type NewsColumnProps = {
  news: NewContentProps[];
};

export const NewsColumn: Component<NewsColumnProps> = (props) => {
  return (
    <div class='news-column'>
      <For each={props.news}>{(newContent) => <NewContent {...newContent} />}</For>
    </div>
  );
};
