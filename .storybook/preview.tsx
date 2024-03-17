import "swiper/dist/css/swiper.min.css";
import { TemplateProvider } from "../src/stories/TemplateProvider";

import { render } from "solid-js/web";
import { Preview } from "storybook-solidjs";

let disposeStory = () => {};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      disposeStory();
      const solidRoot = document.createElement("div");
      disposeStory = render(
        () => (
          <TemplateProvider>
            <Story />
          </TemplateProvider>
        ),
        solidRoot
      );
      return solidRoot;
    },
  ],
};

export default preview;
