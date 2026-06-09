import type { TaskBase } from "@/redux/slices/types";
import { Form, TimePicker } from "antd";

export const TimePickerInput = () => {
  return (
    <Form.Item<TaskBase> name="deadline">
      <TimePicker
        format="h:mm"
        showNow={false}
        needConfirm={false}
        minuteStep={5}
      />
    </Form.Item>
  );
};
