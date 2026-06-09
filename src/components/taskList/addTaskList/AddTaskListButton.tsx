import { PlusOutlined } from "@ant-design/icons";
import FloatButton from "antd/es/float-button/FloatButton";
import { useState } from "react";
import { ADD_LIST_FORM_ID, AddTaskListForm } from "./AddTaskListForm";
import Modal from "antd/es/modal/Modal";

export const AddTaskListButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <FloatButton
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <Modal
          title="Add Task List"
          open
          onCancel={() => setIsModalOpen(false)}
          okButtonProps={{ form: ADD_LIST_FORM_ID, htmlType: "submit" }}
        >
          <AddTaskListForm onFinish={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};
