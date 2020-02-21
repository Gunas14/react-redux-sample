import React from 'react';
import './App.css';
import Namelist from './components/namelist'
import UserDetails from './components/userdetails'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>
            A learning app which gets data from jsonplaceholder api
          </h1>
        </header>
        <div className="MainView">
          <div style={{ flex: 1 }}><Namelist /></div>
          <div className="verticalLine"></div>
          <div style={{ flex: 3 }}><UserDetails /></div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
