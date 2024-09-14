// ComponentB.js
import React from 'react';
import ComponentC from './ComponentC';
import './Styles.css';

function ComponentB() {
    return (
        <div className="componentB">
            <h1>Component B</h1>
            <ComponentC />
        </div>
    );
}

export default ComponentB;