import { createPresence } from "@solid-primitives/presence";
import { createListTransition } from "@solid-primitives/transition-group";
import clsx from "clsx";
import { Component, For, Show, createEffect, createSignal, useTransition } from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import $ from "jquery";
import { resolveElements } from "@solid-primitives/refs";

type NotificationType = "success" | "info" | "error";

type NotificationProps = {
  message: string;
  type: NotificationType;
};

export const Notification: Component<NotificationProps> = (props) => {
  let notificationRef: HTMLDivElement;

  return (
    <div
      ref={notificationRef!}
      class={clsx("appDeliveryTimeMessage", {
        "notf-success": props.type === "success",
        "notf-inform": props.type === "info",
        "notf-wrong": props.type === "error",
      })}
    >
      <span>{props.message}</span>
    </div>
  );
};

type NotificationsBoxProps = {
  notifications: NotificationProps[];
};

export const NotificationsBox: Component<NotificationsBoxProps> = (props) => {
  const [sg, setSg] = createSignal([1, 2, 3]);

  return (
    <div class='notification-box' id='notifications' style={{ transition: "height 1s" }}>
      <div id='idk' style={{ opacity: 0 }}>
        idk
      </div>
      <TransitionGroup
        onBeforeEnter={(e) => {
          $(e).hide();
        }}
        onEnter={(e, done) => {
          $(e).slideDown({ done });
        }}
        onBeforeExit={(e) => console.log(e)}
        onExit={(e, done) => $(e).slideUp({ done })}
        onAfterExit={(e) => {
          $(e).remove();
        }}
      >
        <For each={sg()}>{(notification) => <div>{notification}</div>}</For>
      </TransitionGroup>

      <TransitionGroup
        onBeforeEnter={(e) => {
          $(e).hide();
        }}
        onEnter={(e, done) => {
          $(e).fadeIn({ done });
        }}
        onExit={(e, done) => $(e).fadeOut({ done })}
        onAfterExit={(e) => {
          $(e).remove();
        }}
      >
        <For each={props.notifications}>{(notification) => <div>{notification.type}</div>}</For>
      </TransitionGroup>

      <button onClick={() => setSg((sg) => [...sg, sg.length + 1])}>Add number</button>
      <button onClick={() => setSg((sg) => sg.slice(0, -1))}>Remove number</button>
    </div>
  );
};
