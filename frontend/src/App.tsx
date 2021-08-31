import React, { Fragment } from 'react';

import { GlobalStyle } from './globalStyle';

import 'antd/dist/antd.css';
import Routes from './routes';


function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Routes/>
    </Fragment>
  );
}

export default App;
