
import './App.css';
import React, {useState} from 'react';
import Main from './Main'
import Detail from './Detail'
import {BrowserRouter, Route, Switch, useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/detail/:id" component={Detail} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
