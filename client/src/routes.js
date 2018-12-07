/* eslint-disable global-require */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './modules/App/App';
import StoreCreatePage from './modules/Store/pages/StoreCreatePage/StoreCreatePage';
import StoreExplorePage from './modules/Store/pages/StoreExplorePage/StoreExplorePage';
// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/

const Main = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/new" component={StoreCreatePage} />
    <Route path="/explore" component={StoreExplorePage} />
  </Switch>
);

export default (
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>
);
