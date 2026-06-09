import { Form, Input } from "antd";
import { useCallback } from "react";
import type { TaskListBase } from "@/redux/slices/types";
import { useAppDispatch } from "@/redux/hooks";
import { IconPicker } from "../IconPicker";
import { EMOJIS } from "../TaskListEmojis";

export const ADD_GAME_FORM_ID = "add-task-list-form";

export const AddTaskListForm = ({ onFinish }: { onFinish: () => void }) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<TaskListBase>();

  const saveTaskList = useCallback(
    (taskListBase: TaskListBase) => {
      dispatch({ type: "taskLists/addTaskList", payload: taskListBase });
      onFinish();
    },

    [dispatch, onFinish],
  );

  return (
    <Form<TaskListBase>
      form={form}
      onFinish={saveTaskList}
      id={ADD_GAME_FORM_ID}
      initialValues={{ icon: EMOJIS[0] }}
    >
      <div className="flex">
        <IconPicker />
        <Form.Item name="name" required>
          <Input size="large" variant="borderless" placeholder="Task Name" />
        </Form.Item>
      </div>
    </Form>
  );
};
