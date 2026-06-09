import { useAppDispatch } from "@/redux/hooks";
import { removeTaskList } from "@/redux/slices/taskListsSlice";
import { PATHS } from "@/router/paths";
import { DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

interface RemoveTaskListButtonProps {
  id: string;
  name: string;
}

export const RemoveTaskListButton = ({
  id,
  name,
}: RemoveTaskListButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <Dropdown
        menu={{
          items: [
            {
              key: "1",
              icon: <DeleteOutlined />,
              label: "Delete Task List",
              danger: true,
              onClick: () => setIsModalOpen(true),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button icon={<MoreOutlined />} variant="solid" />
      </Dropdown>
      <Modal
        title="Confirm Deletion"
        open={isModalOpen}
        okText="Delete"
        okButtonProps={{ danger: true }}
        onOk={() => {
          dispatch(removeTaskList(id));
          setIsModalOpen(false);
          navigate(PATHS.HOME);
        }}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>
          Are you sure you want to delete the task list <strong>{name}</strong>?
        </p>
      </Modal>
    </>
  );
};
