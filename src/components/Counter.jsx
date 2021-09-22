import React, { useState } from 'react'

export default function Counter() {
    let [counter, setcounter] = useState(0);
    function increase () {
        setcounter (counter + 1);
      }
      const decrese = () => setcounter (counter -1);
      const reset = () => setcounter (counter=0);
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrese}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
