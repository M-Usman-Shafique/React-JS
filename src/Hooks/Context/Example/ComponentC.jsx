// ComponentC.js
import React from 'react';
import ComponentD from './ComponentD';
import './Styles.css';

function ComponentC() {
    return (
        <div className="componentC">
            <h1>Component C</h1>
            <ComponentD />
        </div>
    );
}

export default ComponentC;