import clsx from "clsx";
import { Component } from "solid-js";

type Props = {
  logoUrl: string;
  translations?: {
    name: string;
    value: string;
  }[];
  isMiniMenu?: boolean;
};

export const TopPanel: Component<Props> = (props) => {
  return (
    <div class={clsx("toppanel hw-acc multiapp", props.isMiniMenu && "mini-menu")}>
      <div class='multiapp-back js-multiapp-choose'>
        <div class='multiapp-icon'></div>
      </div>
      <button class='toppanel-btn'></button>
      <a class='js-home-button'>
        <img src={props.logoUrl} alt='Logo' title='Logo' />
      </a>

      {props.translations?.length && (
        <div class='translator-box'>
          <div id='google_translate_element'>
            <div class='skiptranslate goog-te-gadget' dir='ltr' style=''>
              <div id=':0.targetLanguage'>
                <select class='goog-te-combo' aria-label='Language Translate Widget'>
                  <option value=''>Select Language</option>
                  {props.translations.map((translation) => (
                    <option value={translation.value}>{translation.name}</option>
                  ))}
                </select>
              </div>
              {"Powered by "}
              <span style='white-space:nowrap'>
                <a
                  class='VIpgJd-ZVi9od-l4eHX-hSRGPd'
                  href='https://translate.google.com'
                  target='_blank'
                >
                  <img
                    src='https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png'
                    width='37px'
                    height='14px'
                    style='padding-right: 3px'
                    alt='Google Translate'
                  />
                  Translate
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
