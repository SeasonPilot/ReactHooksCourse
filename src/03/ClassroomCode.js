import React, {useState, useEffect} from "react";


// 设置一个 size 的 state 用于保存当前窗口尺寸
const [size, setSize] = useState({});

useEffect(() => {
    // 窗口大小变化事件处理函数
    const handler = () => {
        setSize(getSize());
    };

    // 监听 resize 事件
    window.addEventListener('resize', handler);

    // 返回一个 callback 在组件销毁时调用
    return () => {
        // 移除 resize 事件
        window.removeEventListener('resize', handler);
    };

}, []);


function MyComp() {
    const [count, setCount] = useState();  //...
    return <div>{count}</div>;
}

function MyComp() {
    const [count, setCount] = useState(0);
    if (count > 10) {
        // 错误:不能将 Hook 用在条件判断里
        useEffect(() => {
            // ...
        }, [count])
    }

    // 这里可能提前返回组件渲染结果，后面就不能再用 Hooks 了
    if (count === 0) {
        return 'No content';
    }

    // 错误:不能将 Hook 放在可能的 return 之后
    const [loading, setLoading] = useState(false);

    //...
    return <div>{count}</div>
}


import React from 'react';
import {useWindowSize} from '../hooks/useWindowSize';

// 我们已经定义了监听窗口大小变化的一个 Hook: useWindowSize。
// 高阶组件
export const withWindowSize = (Comp) => {
    return props => {
        const windowSize = useWindowSize();  // 我们已经定义了监听窗口大小变化的一个 Hook:useWindowSize。
        return <Comp windowSize={windowSize} {...props} />;
    };
};


import React from 'react';
import {withWindowSize} from './withWindowSize';

class MyComp {
    render() {
        const {windowSize} = this.props;
        // ...
    }
}

// 通过 withWindowSize 高阶组件给 MyComp 添加 windowSize 属性
export default withWindowSize(MyComp);
