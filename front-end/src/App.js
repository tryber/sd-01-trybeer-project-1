import React from 'react';
import { Provider } from './context/index';
import Register from './pages/RegisterPage';

function App() {
  return (
    <Provider>
      <div className="App">
        <Register />
      </div>
    </Provider>
  );
}

export default App;
