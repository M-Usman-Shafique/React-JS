import React from 'react';
import { useUser } from './UserContext';
import './Styles.css';

function ComponentD() {
    const { user } = useUser();

    return (
        <div className="componentD">
            <h1>Component D</h1>
            <p>{user} received!</p>
        </div>
    );
}

export default ComponentD;