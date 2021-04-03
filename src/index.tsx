import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './styles/resetMainStyles.css';
import reportWebVitals from './reportWebVitals';

import { App } from './App';

WebFont.load({
  google: {
    families: ['Oswald:400,500,600:latin,cyrillic', 'Raleway:400,500:latin,cyrillic'],
  },
  classes: false,
  events: false,
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
