import React from 'react';

import './App.css';
import { TestableButton } from './components/testable-button';
import logo from './logo.svg';
import { useAppDispatch } from './middlewares/hooks';
import { useGetStuff } from './middlewares/stuff/hooks/use-get-stuff.hook';
import { getStuff } from './middlewares/stuff/thunks/get-stuff.thunk';
import { BridgeDeal } from './modules/bridge';

function App() {
    const dispatch = useAppDispatch();
    const stuff = useGetStuff('id');
    return (
        <div className="App">
            <BridgeDeal />
        </div>
    );
}

export default App;
