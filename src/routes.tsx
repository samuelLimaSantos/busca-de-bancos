import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;