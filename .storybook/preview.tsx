import { render } from 'solid-js/web';
import { Preview } from 'storybook-solidjs';
import 'swiper/dist/css/swiper.min.css';

import { TemplateProvider } from '../src/stories/TemplateProvider';

let disposeStory = () => {};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
      const solidRoot = document.createElement('div');
      disposeStory = render(
        // @ts-ignore Render is rendering both solid and React components JSX
        () => (
          // @ts-ignore TemplateProvider is Solid component
          <TemplateProvider>
            {/* @ts-ignore Story is Storybook's React component */}
            <Story />
          </TemplateProvider>
        ),
        solidRoot,
      );
      return solidRoot;
    },
  ],
};

export default preview;
