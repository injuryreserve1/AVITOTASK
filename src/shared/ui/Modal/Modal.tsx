import cls from "./Modal.module.css";
import Button from "../Button/Button";
import type { ComponentType, SetStateAction, Dispatch } from "react";

interface ContentProps {
  handleAction: () => void;
  setReason: Dispatch<SetStateAction<string>>;
  reason: string;
}

interface Props {
  handleClick: () => void;
  Component: ComponentType<ContentProps>;
  handleAction: () => void;
  reason: string;
  setReason: Dispatch<SetStateAction<string>>;
}

const Modal = ({
  handleClick,
  Component,
  setReason,
  reason,
  handleAction,
}: Props) => {
  return (
    <div onClick={handleClick} className={cls.Modal}>
      <div onClick={(e) => e.stopPropagation()} className={cls.ModalContent}>
        <Button theme="clear" onClick={handleClick} className={cls.CloseButton}>
          &times;
        </Button>
        <Component
          reason={reason}
          handleAction={handleAction}
          setReason={setReason}
        />
      </div>
    </div>
  );
};

export default Modal;
