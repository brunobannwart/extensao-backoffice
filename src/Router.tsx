import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

interface IProps {
  isLogged: boolean;
}

const Router: React.FC<IProps> = (props: IProps) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {props.isLogged ? (
            <Route path="/">
            </Route>
          ) : (
            <Route path="/">
            </Route>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
