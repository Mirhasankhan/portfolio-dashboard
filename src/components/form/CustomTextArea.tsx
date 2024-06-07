import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller } from "react-hook-form";

type TProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  defaultValue?: object | null | string;
  readOnly?: boolean;
  placeholder?: string;
};

const CustomTextArea = ({
  name,
  label,
  disabled,
  defaultValue,
  readOnly,
  placeholder,
}: TProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Form.Item label={label}>
            <TextArea
              {...field}
              id={name}
              size="large"
              disabled={disabled}
              className="bg-gray-100 border-2 border-green-200"
              required
              readOnly={readOnly}
              placeholder={placeholder}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomTextArea;
