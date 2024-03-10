import React, {useState, useEffect} from "react";

const getSize = () => {
    return window.innerWidth > 1000 ? "large" : "small";
}

const useWindowSize = () => {
    const [size, setsize] = useState(getSize());

    useEffect(() => {
        const handler = () => {
            setsize(getSize())
        };

        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        }

    }, []);

    return size;
};


const Demo = () => {
    const size = useWindowSize();

    if (size == "small") return <SmallComponent/>;
    else return <LargeComponent/>;
};


/*
* 所选代码的解释:
useWindowSize 钩子
useWindowSize 钩子用于跟踪浏览器窗口大小,并返回它当前是否为“大”还是“小”。
它不接受任何输入。
它返回一个字符串,根据窗口宽度,返回“大”或“小”。
它的工作原理是首先在挂载时调用 getSize 函数来获取初始窗口大小。它使用 useState 钩子将其保存到 size 状态变量中。
然后它设置了一个窗口调整大小的事件监听器,每当窗口调整大小时就会再次调用 getSize 函数。它将新的大小保存回状态中。
这会在大小发生变化时导致重新渲染。
在卸载组件时,它会清除事件监听器。
getSize 函数检查窗口宽度是否大于 1000px。如果是,它返回“大”,否则返回“小”。
所以总结一下,这个钩子以可重用的方式封装了跟踪窗口大小的逻辑。它在一个简单的 API 后面抽象出了需要的状态和事件监听器代码,这个 API 只是返回当前的窗口大小状态。
*
* */