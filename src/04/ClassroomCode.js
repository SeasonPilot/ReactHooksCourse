import React, {useState, useEffect} from "react";


/*
* 我们在加号按钮上定义了一个事件处理函数，用来让计数器加 1。但 是因为定义是在函数组件内部，因此在多次渲染之间，
* 是无法重用 handleIncrement 这个函数的，而是每次都需要创建一个新的
* */
function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);

    //...
    return <button onClick={handleIncrement}>+</button>  // 每次创建新函数的方式会让接收事件处理函数的组件，需要重新渲染。
}

/*
* 你不妨思考下这个过程。每次组件状态发生变化的时候，函数组件实际上都会重新执行一 遍。在每次执行的时候，
* 实际上都会创建一个新的事件处理函数 handleIncrement。这个事件处理函数中呢，包含了 count 这个变量的闭包，以确保每次能够得到正确的结果。
* */


import React, {useState, useCallback} from 'react';


function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = useCallback(
        () => setCount(count + 1),
        [count], // 只有当 count 发生变化时，才会重新创建回调函数
    );

    //...
    return <button onClick={handleIncrement}>+</button>
}