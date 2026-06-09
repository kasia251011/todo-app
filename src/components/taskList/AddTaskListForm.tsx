import { Form, Input } from "antd";
import { useCallback, useEffect } from "react";
import type { TaskListBase } from "@/redux/taskLists/types";
import { useAppDispatch } from "@/redux/hooks";

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

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <Form<TaskListBase>
      form={form}
      onFinish={saveTaskList}
      id={ADD_GAME_FORM_ID}
      requiredMark={"optional"}
      layout={"vertical"}
      clearOnDestroy
    >
      <Form.Item name="name" required>
        <Input size="large" variant="borderless" placeholder="Task Name" />
      </Form.Item>
    </Form>
  );
};
