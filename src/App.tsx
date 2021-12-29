import React from 'react';

import './App.css';
import { TestableButton } from './components/testable-button';
import logo from './logo.svg';
import { useAppDispatch } from './middlewares/hooks';
import { useGetStuff } from './middlewares/stuff/hooks/use-get-stuff.hook';
import { getStuff } from './middlewares/stuff/thunks/get-stuff.thunk';

function App() {
    const dispatch = useAppDispatch();
    const stuff = useGetStuff('id');
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button
                    type="button"
                    onClick={() => {
                        dispatch(getStuff('id'));
                    }}
                >
                    get stuff
                </button>
                <span>{JSON.stringify(stuff)}</span>
                <span>learn</span>
                <TestableButton />
            </header>
        </div>
    );
}

export default App;
