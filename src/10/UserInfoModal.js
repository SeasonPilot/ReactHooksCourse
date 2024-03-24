import { Modal } from "antd";
import useUser from "../09/useUser";

function UserInfoModal({ visible, userId, ...rest }) {
  const { data: user, error } = useUser(userId);

  return (
    <Modal visible={visible} className="exp-10-user-info-modal" {...rest}>
      {error && "Fetch failed."}
      {user ? (
        <div className="exp-10-user-info-modal">
          <img src={user.avatar} alt="" />
          <label>{user.name}</label>
          <p>{user.introduction}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </Modal>
  );
}

// 容器模式：实现按条件执行 Hooks
// 把条件判断的结果放到两个组件之中，确保真正 render UI 的组件收到的所有属性都是有值的。
// 定义一个容器组件用于封装真正的 UserInfoModal
export default function UserInfoModalWrapper({ visible, ...rest }) { // 使用 rest 获取除了 visible 之外的属性
  if (!visible) return null;  // 如果对话框不显示，则不 render 任何内容
  return <UserInfoModal visible {...rest} />; // 否则真正执行对话框的组件逻辑
}
