import React from 'react';

import { Link } from 'react-router-dom';

import { exampleRecord } from './constants';

export function Home() {
    return (
        <div>
            <div>Choose Between The Following</div>
            <ul>
                {Object.keys(exampleRecord).map((k) => (
                    <li>
                        <Link to={k}>{k}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
