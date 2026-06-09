import { Button, Modal } from "antd";
import type { PropsWithChildren } from "react";

interface CrudModalProps {
  handleCancel(): void;
  isLoading?: boolean;
  open: boolean;
  title: string;
  formId: string;
  width?: number;
  extraButton?: React.ReactNode;
}

export const CrudModal = ({
  children,
  handleCancel,
  open,
  isLoading,
  title,
  formId,
  width,
  extraButton,
}: PropsWithChildren<CrudModalProps>) => {
  return (
    <Modal
      title={title}
      onCancel={handleCancel}
      open={open}
      className="w-fit"
      width={width}
      footer={[
        ...(extraButton ? [extraButton] : []),
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          loading={isLoading}
          form={formId}
          key="submit"
          htmlType="submit"
          type="primary"
        >
          Save
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};
