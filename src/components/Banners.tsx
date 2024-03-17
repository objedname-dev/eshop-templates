import { Component, For, Show, createEffect, on, onCleanup } from "solid-js";
import Swiper from "swiper";

type Props = {
  banners: string[];
};

export const Banners: Component<Props> = (props) => {
  let bannersRef: HTMLDivElement | undefined = undefined;
  let bannersPaginationRef: HTMLDivElement | undefined = undefined;

  createEffect(
    on(
      () => props.banners,
      () => {
        if (!bannersRef || !bannersPaginationRef || props.banners.length < 2) return;

        const swiper = new Swiper(bannersRef, {
          speed: 1000,
          loop: true,
          pagination: {
            el: bannersPaginationRef,
          },
          autoplay: {
            delay: 5000,
          },
        });

        onCleanup(() => swiper!.destroy(false, false));
      }
    )
  );

  return (
    <div class='app-banner-content hw-acc'>
      <div ref={bannersRef} class='swiper-container'>
        <div class='swiper-wrapper'>
          <Show when={props.banners?.length}>
            <For each={props.banners}>
              {(bannerUrl) => (
                <div class='swiper-slide'>
                  <img src={bannerUrl} alt='banner' />
                </div>
              )}
            </For>
          </Show>
        </div>
        <div ref={bannersPaginationRef} class='swiper-pagination' />
      </div>
      <div class='cleaner'></div>
    </div>
  );
};
