import clsx from 'clsx';
import $ from 'jquery';
import { Component, For } from 'solid-js';
import { TransitionGroup } from 'solid-transition-group';

export enum NotificationType {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
}

type NotificationProps = {
  message: string;
  type: NotificationType;
  className?: string;
};

export const Notification: Component<NotificationProps> = (props) => {
  let notificationRef: HTMLDivElement;

  return (
    <div
      ref={notificationRef!}
      class={clsx(
        {
          'notf-success': props.type === 'success',
          'notf-inform': props.type === 'info',
          'notf-wrong': props.type === 'error',
        },
        props.className,
      )}
    >
      <span>{props.message}</span>
    </div>
  );
};

type NotificationsBoxProps = {
  notifications: NotificationProps[];
};

export const NotificationsBox: Component<NotificationsBoxProps> = (props) => {
  return (
    <div class="notification-box" id="notifications">
      <TransitionGroup onExit={(e, done) => $(e).slideUp({ done })} onAfterExit={(e) => e.remove()}>
        <For each={props.notifications}>{(notification) => <Notification {...notification} />}</For>
      </TransitionGroup>
    </div>
  );
};
