import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// PAGES
import MainPage from './pages/MainPage/lazy';

const App = () => {
  return (
    <div>
      <Switch>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Route exact path="/" component={MainPage} />
          <Redirect to="/" />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
