import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Poke404 } from './Poke404';
import { PokePage } from './PokePage';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/pokemon/1" />
        </Route>
        <Route path="/pokemon/:id" exact component={PokePage} />
        <Route component={Poke404} />
      </Switch>
    </BrowserRouter>
  );
};
