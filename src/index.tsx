/* @refresh reload */
import { render } from "solid-js/web";

import "@/tailwind.css";
import "@/swiper.css";
import "@/index.css";
import "swiper/dist/css/swiper.min.css";
import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => <App />, root!);
