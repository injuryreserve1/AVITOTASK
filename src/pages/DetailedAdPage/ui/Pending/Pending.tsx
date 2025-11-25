import cls from "./Pending.module.css";
import Button from "@shared/ui/Button/Button";
import type { Dispatch, SetStateAction, ChangeEvent } from "react";

interface Props {
  reason: string;
  setReason: Dispatch<SetStateAction<string>>;
  handleAction: () => void;
}

const Pending = ({ handleAction, reason, setReason }: Props) => {
  const handleReason = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("reason", reason);
    setReason(e.target.value);
  };
  return (
    <div className={cls.Wrapper}>
      <h4>Причина</h4>
      <div>
        <input
          onChange={(e) => handleReason(e)}
          type="radio"
          name="photo"
          value="photo"
          checked={"photo" === reason}
        />
        <label htmlFor="photo">неправильное фото</label>
      </div>
      <Button disabled={reason == ""} theme="bordered" onClick={handleAction}>
        Принять
      </Button>
    </div>
  );
};

export default Pending;
