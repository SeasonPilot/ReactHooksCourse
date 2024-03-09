import React from "react";

class ConstComp extends React.PureComponent {
  render() {
    console.log("abc");
    return "Hello";
  }
}
function CountLabel({ count }) {
  const color = count > 10 ? "red" : "blue";
  return <span style={{ color }}>{count}</span>;
}

export default function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        <CountLabel count={count} />
        <ConstComp />
      </button>
    </div>
  );
}


/*
* 可以看到，我们定义了一个新的组件 CountLabel，在值大于 10 的时候显示红色，否则为
蓝色。并且，我们还要在 Counter 组件里使用 CountLabel 这个子组件，这样的话我们就
可以通过 props 把 count 这个值从父组件传递到子组件，那么在 count 发生变化时，
CountLabel 也会重新渲染。此外，所有通过属性定义在这个 Tag 上的参数，都会作为一
个对象传递给函数组件，这样在函数组件内部就可以使用这些参数了。
* */