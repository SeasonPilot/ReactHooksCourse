import React, { useState, useCallback } from "react";

/**
 * value structure:
 * {
 *   amount: 10,
 *   currency: 'rmb'
 * }
 */
function PriceInput({
  // 定义默认的 value 的数据结构
  value = { amount: 0, currency: "rmb" },
  // 默认不处理 onChange 事件
  onChange = () => {}
}) {
  // 定义一个事件处理函数统一处理 amount 或者 currency 变化的场景
  const handleChange = useCallback(
    (deltaValue) => {
    // 直接修改外部的 value 值，而不是定义内部 state
      onChange({
        ...value,
        ...deltaValue
      });
    },
    [value, onChange]
  );
  return (
    <div className="exp-02-price-input">
      <input
        value={value.amount}
        onChange={(evt) => handleChange({ amount: evt.target.value })}
      />
      <select
        value={value.currency}
        onChange={(evt) => handleChange({ currency: evt.target.value })}
      >
        <option value="rmb">RMB</option>
        <option value="dollar">Dollar</option>
        <option value="eur">EUR</option>
      </select>
    </div>
  );
}

// Example Wrapper
export default () => {
  const [price, setPrice] = useState();
  return (
    <>
      <PriceInput value={price} onChange={setPrice} />
      <p>{JSON.stringify(price)}</p>
    </>
  );
};
