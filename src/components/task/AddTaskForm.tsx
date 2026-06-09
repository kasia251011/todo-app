import { Form, Input } from "antd";
import { useCallback } from "react";
import type { TaskBase } from "@/redux/slices/types";
import { useAppDispatch } from "@/redux/hooks";
import { TimePickerInput } from "./TimePickerInput";
import { addTask } from "@/redux/slices/taskSlice";

export const ADD_TASK_FORM_ID = "add-task-form";

interface AddTaskFormProps {
  onFinish: () => void;
  taskListId: string;
}

export const AddTaskForm = ({ onFinish, taskListId }: AddTaskFormProps) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<TaskBase>();

  const saveTask = useCallback(
    (task: TaskBase) => {
      dispatch(addTask({ ...task, listId: taskListId }));
      onFinish();
    },

    [dispatch, onFinish, taskListId],
  );

  return (
    <Form<TaskBase> form={form} onFinish={saveTask} id={ADD_TASK_FORM_ID}>
      <div className="flex flex-col">
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Add a task title" }]}
        >
          <Input
            size="large"
            variant="borderless"
            placeholder="What needs to be done?"
            style={{ padding: 0 }}
          />
        </Form.Item>
        <TimePickerInput />
      </div>
    </Form>
  );
};
