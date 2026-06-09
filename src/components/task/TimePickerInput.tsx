import type { TaskBase } from "@/redux/slices/types";
import { Form, DatePicker } from "antd";

export const TimePickerInput = () => {
  return (
    <Form.Item<TaskBase> name="deadline">
      <DatePicker
        format="DD MMM h:mm "
        showNow={true}
        needConfirm={false}
        minuteStep={5}
        showTime={true}
      />
    </Form.Item>
  );
};
