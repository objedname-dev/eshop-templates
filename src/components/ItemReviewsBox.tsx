import clsx from 'clsx';
import { Component, For, Show, createSignal } from 'solid-js';

type ItemReviewProps = {
  date: string;
  stars: number;
  text: string;
  reply?: {
    date: string;
    text: string;
  };
};

export const ItemReview: Component<ItemReviewProps> = (props) => {
  return (
    <>
      <div class="review" style={{ display: 'block' }}>
        <div class="review-content">
          <div class="review-user-img">
            <div
              class="review-user-icon"
              style={{
                'background-image': 'url(https://objedname.eu/ui/system/icons/white/customer.svg)',
              }}
            ></div>
          </div>
          <div class="review-date">{props.date}</div>
          <div class="review-stars-box">
            <For each={Array.from(Array(5))}>
              {(_, index) => (
                <div
                  class={clsx(`review-stars-${index()} review-star`, index() <= props.stars && 'active')}
                />
              )}
            </For>
            <div class="cleaner" />
          </div>
          <p class="review-text">{props.text}</p>
        </div>
      </div>
      <Show when={props.reply}>
        <div class="review-reply" style={{ display: 'block' }}>
          <div class="review-content-reply">
            <div class="review-company-img">
              <div
                class="review-company-icon"
                style={{
                  'background-image': 'url(https://objedname.eu/ui/system/icons/white/full_arrow_bottom.svg)',
                }}
              />
            </div>
            <div class="review-date">{props.reply?.date}</div>
            <p class="review-text">{props.reply?.text}</p>
          </div>
        </div>
      </Show>
    </>
  );
};

type ReviewInputProps = {
  value?: number;
  onChange?: (value: number) => void;
};

const ReviewInput: Component<ReviewInputProps> = (props) => {
  const [hoveredValue, setHoveredValue] = createSignal(1);

  return (
    <div class="review-stars stars-write-review">
      <For each={Array.from(Array(5))}>
        {(_, index) => (
          <div
            onMouseEnter={() => setHoveredValue(index() + 1)}
            onMouseLeave={() => setHoveredValue(1)}
            onClick={() => props.onChange?.(index() + 1)}
            class={clsx(
              `review-stars-${index() + 1}`,
              (index() + 1 <= (props.value ?? 1) || index() + 1 <= hoveredValue()) && 'active',
            )}
          />
        )}
      </For>
    </div>
  );
};

type ItemReviewsProps = {
  isLoggedIn?: boolean;
  reviews?: ItemReviewProps[];
};

export const ItemReviewsBox: Component<ItemReviewsProps> = (props) => {
  return (
    <div class="item-reviews-box">
      <div class="item-review-plogin" style={{ display: props.isLoggedIn ? 'none' : 'block' }}>
        <div class="item-review-plogin-text">Pro možnost napsání recenze se prosím přihlašte.</div>
        <a href="#" class="btn-href gradient-btn" data-navigation-target="#account-settings">
          Přihlásit se
        </a>
        <div class="cleaner" />
      </div>

      <div class="item-review-form" style={{ display: props.isLoggedIn ? 'block' : 'none' }}>
        <h4>Vaše hodnocení</h4>
        <ReviewInput />
        <div class="cleaner" />
        <form action="#" method="post">
          <input type="hidden" id="review-item-id" value="" />
          <div class="field">
            <textarea id="review-text" maxlength="150" placeholder="Jaké je vaše doporučení?"></textarea>
            <label for="review-text">Jaké je vaše doporučení?</label>
          </div>
          <input type="submit" class="gradient-btn review-submit" value="Odeslat" />
        </form>
        <div class="cleaner" />
      </div>

      <div class="review-box">
        <h4>
          <span class="review-num-reviews">{`${(props.reviews ?? []).length}`}</span> Hodnocení
        </h4>
        <div class="reviews-info-column">
          <div class="tooltip">
            Info
            <span class="tooltiptext">
              Recenze se u nás neověřují. Recenzi může napsat kdokoliv, kdo má ověřenou emailovou adresu.
              Limit ke každému jídlu je max. 1 recenze na účet.
            </span>
          </div>
        </div>

        <div class="reviews-container">
          <For each={props.reviews}>{(review) => <ItemReview {...review} />}</For>
        </div>
      </div>
    </div>
  );
};
