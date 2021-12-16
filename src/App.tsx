import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getStuff } from './middlewares/stuff/thunks/get-stuff.thunk';
import { useAppDispatch, useAppSelector } from './middlewares/hooks';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useAppDispatch();
  const stuff = useAppSelector(state => state.stuff.lookup.id);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={
          ()=> {
            dispatch(getStuff('id'));
          }
        }>get stuff</button>
        <span>{JSON.stringify(stuff)}</span>
        <span>learn</span>
      </header>
    </div>
  );
}

export default App;
