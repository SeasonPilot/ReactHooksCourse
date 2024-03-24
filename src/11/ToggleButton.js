import { useState } from "react";

// 自定义事件
// 所谓自定义事件，就是定义了一个 onChange 这样的属性，允许传递一个回调函数给这个组件，在某个时机去调用这个回调函数，从而实现事件的功能。
function ToggleButton({ value, onChange }) {
  const handleClick = () => {
    onChange(!value);
  };
  return (
    <button style={{ width: "60px" }} onClick={handleClick}>
      <span>{value ? "On" : "Off"}</span>
    </button>
  );
}


// ToggleButton 组件内部调用了 onChange 这个通过属性传递进来的回调函数，并传递了当前值给回调函数，从而实现了子组件到父组件的通信。
export default () => {
  const [on, setOn] = useState(true);
  return (
    <>
      <h1>Toggle Button</h1>
      <ToggleButton value={on} onChange={(value) => setOn(value)} />
    </>
  );
};
