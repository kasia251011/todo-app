import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ADD_TASK_FORM_ID, AddTaskForm } from "./AddTaskForm";
import Modal from "antd/es/modal/Modal";
import { Button } from "antd";

export const AddTaskButton = ({ taskListId }: { taskListId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        icon={<PlusOutlined />}
        type="primary"
        onClick={() => setIsModalOpen(true)}
      >
        Add Task
      </Button>
      {isModalOpen && (
        <Modal
          title="Add Task"
          open
          onCancel={() => setIsModalOpen(false)}
          okButtonProps={{ form: ADD_TASK_FORM_ID, htmlType: "submit" }}
        >
          <AddTaskForm
            onFinish={() => setIsModalOpen(false)}
            taskListId={taskListId}
          />
        </Modal>
      )}
    </>
  );
};
