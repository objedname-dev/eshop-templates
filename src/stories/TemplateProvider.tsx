import { makePersisted } from '@solid-primitives/storage';
import clsx from 'clsx';
import { Component, JSXElement, createResource, createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';

const templates = ['rounded', 'king', 'default', 'new'];

type Props = {
  children?: JSXElement;
};

export const TemplateProvider: Component<Props> = (props) => {
  const [template, setTemplate] = makePersisted(createSignal(templates[0]), {
    name: 'template',
    storage: localStorage,
  });

  const [templateCss] = createResource(template, async () => {
    const css: string = await (
      await import(`../templates/${template()}/style.scss?inline`)
    ).default;
    return css.replace(/\/ui\/system\//g, 'https://objedname.eu/ui/system/');
  });

  const root = () =>
    window.parent.document.querySelector("button[title='Go full screen [F]']")
      ?.parentElement;

  return (
    <>
      <Portal mount={document.head}>
        <style>{templateCss()}</style>
      </Portal>
      <Portal mount={root() ? root()! : undefined}>
        <div
          class={clsx(!root() && 'tw-flex tw-content-center')}
          style={
            !!root()! && {
              display: 'flex',
              'align-items': 'center',
              height: '100%',
            }
          }
        >
          <select
            class={clsx(
              !root() && 'tw-fixed tw-bottom-2 tw-left-2 tw-z-50 tw-bg-white',
            )}
            value={template()}
            onChange={(e) => setTemplate(e.target.value)}
          >
            {templates.map((template) => (
              <option value={template}>{template}</option>
            ))}
          </select>
        </div>
      </Portal>
      {props.children}
    </>
  );
};
