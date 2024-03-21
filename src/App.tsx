import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/stores'; 
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <main className="App-main">
          <Dashboard />
        </main>
      </div>
    </Provider>
  );
};

export default App;
