import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import './index.css';
// import App from './App';
import APP_W from './wrappers/app_w';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store/store';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_ru from "./translations/ru/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    ru: {
      common: common_ru
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <APP_W/>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
