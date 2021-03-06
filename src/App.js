import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// PAGES
import MainPage from './pages/MainPage/lazy';
import Profile from './pages/Profile/lazy';
import ProfileInfo from './pages/ProfileInfo/lazy';

import Spinner from './assets/icons/spinner';

const App = () => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={MainPage} />
        <Route path="/profile/:login" component={Profile} />
        <Route path="/info/" component={ProfileInfo} />
        <Redirect to="/" />
      </Suspense>
    </Switch>
  );
};

export default App;
