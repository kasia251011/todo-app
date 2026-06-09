import { Form, Input } from "antd";
import { useCallback } from "react";
import type { TaskListBase } from "@/redux/slices/types";
import { useAppDispatch } from "@/redux/hooks";
import { IconPicker } from "../IconPicker";
import { EMOJIS } from "@/data/taskListEmojis";
import { addTaskList } from "@/redux/slices/taskListsSlice";

export const ADD_LIST_FORM_ID = "add-task-list-form";

export const AddTaskListForm = ({ onFinish }: { onFinish: () => void }) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<TaskListBase>();

  const saveTaskList = useCallback(
    (taskListBase: TaskListBase) => {
      dispatch(addTaskList(taskListBase));
      onFinish();
    },

    [dispatch, onFinish],
  );

  return (
    <Form<TaskListBase>
      form={form}
      onFinish={saveTaskList}
      id={ADD_LIST_FORM_ID}
      initialValues={{ icon: EMOJIS[0] }}
    >
      <div className="flex">
        <IconPicker />
        <Form.Item
          name="name"
          required
          className="w-full"
          rules={[
            {
              required: true,
              message: "Enter a name for the task list",
            },
          ]}
        >
          <Input
            size="large"
            variant="borderless"
            placeholder="What would be name of the group of tasks?"
          />
        </Form.Item>
      </div>
    </Form>
  );
};
