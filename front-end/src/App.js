import React from 'react';
import { Provider } from './context/index';
import Products from './pages/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Orders from './pages/Orders';
import OneOrder from './pages/OneOrder';


function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/order/:id" component={OneOrder} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
