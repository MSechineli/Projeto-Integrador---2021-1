import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuProjetos from './components/Menu/Menu';
import ToDoList from './components/ToDoList/ToDoList';
import ViewForWeek from './components/ViewForWeek/ViewForWeek';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <MenuProjetos/>
      <Switch>
        <Route path="/ToDoList/:idProjeto" exact component={ToDoList} />
        <Route path="/Semana/" exact component={ViewForWeek} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes