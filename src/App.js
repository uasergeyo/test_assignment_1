import React from 'react';
import './App.css';
import { Router, NavLink } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Routes from './components/router';
import { useTranslation } from "react-i18next";

const history = createBrowserHistory()

function App(props) {
  const [t, i18n] = useTranslation('common');

  return (
    <div className="App">
      <Router history={history}>
        <div className="headerMenu">
          {props.location !== "/" ? <NavLink to="/">{t("links.mainPage")}</NavLink> : null}
          {props.location !== "/create-note" ? <button onClick={() => history.push('/create-note')}>{t('buttons.createNote')}</button> : null}
          <span onClick={() => i18n.changeLanguage('ru')}> RU </span>
          <span onClick={() => i18n.changeLanguage('en')}> EN </span>
        </div>
        <Routes history={history} />
      </Router>
    </div>
  );
}

export default App;
