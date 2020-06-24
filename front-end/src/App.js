import React from 'react';
import { Provider } from './context/index';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <div className="App">
        <Login />
        <Register />
      </div>
    </Provider>
  );
}

export default App;
