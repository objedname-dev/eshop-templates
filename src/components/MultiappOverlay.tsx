import { Component, For } from 'solid-js';

type Props = {
  logoUrl: string;
  loadingImgUrl?: string;
  multiapps: {
    linkUrl: string;
    bgUrl: string;
    imageUrl: string;
    name: string;
    description?: string;
  }[];
  showDescriptions?: boolean;
};

export const MultiappOverlay: Component<Props> = (props) => {
  return (
    <div id="multiapp-home" class="multiapp-box">
      <style>
        {`.multiapp-loading {
        	z-index: 28000;
        	background: #FFFFFF;
        	height: 100%;
        	position: fixed;
        	width: 100%;
        	background-size: cover;
        	background-position: center top;
        }
        .multiapp-loading object {
        	position: fixed;
        	bottom: 10vw;
        	width: 50%;
        	left: 25%;
        }
        .noscroll {
        	position: fixed;
        	overflow-y: scroll;
        	width: 100%;
        }`}
      </style>
      {/*
        <script>
        //preload
        var multiAppImageLoading = new Image();
        multiAppImageLoading.src = "/user-data/companies/1/pre_loading.jpg";
        </script>
      */}
      <div
        class="multiapp-loading"
        style={{
          display: 'none',
          'background-image': `url('${props.loadingImgUrl}')`,
        }}
      >
        <object
          data="/images/loading/loading.svg"
          type="image/svg+xml"
        ></object>
      </div>

      <div class="multi-toppanel hw-acc">
        <div
          class="multi-toppanel-logo"
          style={{ 'background-image': `url('${props.logoUrl}')` }}
        ></div>
      </div>

      <div class="app-banner-content hw-acc banner-version-app_multiapp">
        <div class="swiper-container-multi">
          <div class="swiper-wrapper"></div>
          <div class="swiper-pagination-multi"></div>
        </div>
        <div class="no-banners"></div>
        <div class="cleaner" />
      </div>

      <div class="app-banner-content hw-acc banner-version-eshop_multiapp">
        <div class="swiper-container-multi">
          <div class="swiper-wrapper"></div>
          <div class="swiper-pagination-multi"></div>
        </div>
        <div class="no-banners"></div>
        <div class="cleaner" />
      </div>

      <div class="multiapp-content">
        <For each={props.multiapps}>
          {({ bgUrl, imageUrl, linkUrl, name, description }) => (
            <a href={linkUrl} class="js-multiapp-link">
              <div
                class="multiapp-col"
                style={{ 'background-image': `url('${bgUrl}')` }}
              >
                <div
                  class="multiapp-href-logo"
                  style={{ 'background-image': `url('${imageUrl}')` }}
                ></div>
                <h4>{name}</h4>
                <div class="multiapp-categories">
                  <div class="multiapp-category-col multiapp_flag_"></div>
                </div>

                {props.showDescriptions && (
                  <div class="multiapp-description">{description}</div>
                )}

                <div class="multiapp-link-box">
                  <span class="multiapp-link-btn">&nbsp;</span>
                </div>
              </div>
            </a>
          )}
        </For>
        <div class="cleaner" />
      </div>
    </div>
  );
};
