import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import { BrowserRouter } from 'react-router-dom';
import Root from 'views/Root';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
