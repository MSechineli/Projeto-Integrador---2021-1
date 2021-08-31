import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ToDoList from './components/ToDoList/ToDoList';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/ToDoList/:idProjeto" exact component={ToDoList} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes