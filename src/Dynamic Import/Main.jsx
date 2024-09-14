import React from 'react';

function Main() {
    const loadMath = () => {
        import('./Math.jsx').then(module => {
            const result = module.math(2, 3);
            console.log(result);
        })
    }

    return (
        <div>
            <button onClick={loadMath}>Load Math</button>
            {/* Math.jsx file will not be loaded to the browser until the button is clicked. See in "Inspect/Sources". */}
        </div>
    );
}

export default Main;
