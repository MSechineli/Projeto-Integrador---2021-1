import React, { Fragment } from 'react';

import { GlobalStyle } from './globalStyle';
import ToDoList from './components/ToDoList/ToDoList';

import 'antd/dist/antd.css';


function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <ToDoList/>
    </Fragment>
  );
}

export default App;
