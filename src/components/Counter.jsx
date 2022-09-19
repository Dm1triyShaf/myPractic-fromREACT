import React, {useState} from "react";


const Counter = function () {
    const [count,setCount] = useState(0)

    function increment() {     /* создаем функцию с increment */
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)    /* создаем функцию с переменной decrement */

  }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>   
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;

