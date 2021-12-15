import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch } from 'react-redux';
import { getStuff } from './middlewares/stuff/thunks/get-stuff.thunk';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={
          ()=> {
            dispatch(getStuff('id'));
          }
        }>get stuff</button>
        <span>learn</span>
      </header>
    </div>
  );
}

export default App;
