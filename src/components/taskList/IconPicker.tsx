import { Dropdown, Form } from "antd";
import { EMOJIS } from "../../data/taskListEmojis";

export const IconPicker = () => {
  const form = Form.useFormInstance();
  const icon = Form.useWatch("icon", form);

  return (
    <Form.Item name="icon" required>
      <Dropdown
        popupRender={() => (
          <div className="grid grid-cols-6 gap-2 p-3 w-48 bg-white rounded-xl shadow-xl border border-gray-100 ">
            {EMOJIS.map((emoji, index) => (
              <button
                key={index}
                onClick={() => form.setFieldValue("icon", emoji)}
                className="text-xl hover:scale-125 transition cursor-pointer"
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      >
        <div className="flex justify-between items-center p-1 rounded-md w-fit hover:bg-gray-200 ">
          <p className="text-3xl cursor-pointer h-fit">{icon}</p>
        </div>
      </Dropdown>
    </Form.Item>
  );
};
