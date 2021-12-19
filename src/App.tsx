import React from 'react';
import logo from './logo.svg';
import { getStuff } from './middlewares/stuff/thunks/get-stuff.thunk';
import { useAppDispatch } from './middlewares/hooks';
import { useGetStuff } from './middlewares/stuff/hooks/use-get-stuff.hook';
import './App.css';
import { DragDeletable } from './modules/drag-deletable';
import { DragDeletableExample } from './modules/drag-deletable/drag-deletable.example';

function App() {
  const dispatch = useAppDispatch();
  const stuff = useGetStuff('id');
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
        <DragDeletableExample/>
      </header>
    </div>
  );
}

export default App;
