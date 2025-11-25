import cls from "./Reject.module.css";
import Button from "@shared/ui/Button/Button";
import { type ChangeEvent } from "react";

import type { Dispatch, SetStateAction } from "react";

interface Props {
  reason: string;
  setReason: Dispatch<SetStateAction<string>>;
  handleAction: () => void;
}

const reasons = [
  { rsn: "prohibited", text: "Запрещенный товары" },
  { rsn: "invalid category", text: "Неверная категория" },
  { rsn: "incorrect description", text: "Некорректное описание" },
  { rsn: "photo problem", text: "Проблемы с фото" },
  { rsn: "fraud", text: "Подозрение на мошенничество" },
];

const Reject = ({ reason, handleAction, setReason }: Props) => {
  const handleReason = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("reason", reason);
    setReason(e.target.value);
  };

  return (
    <div className={cls.Wrapper}>
      <div className={cls.Reject}>
        <h3>Причина:</h3>
        {reasons.map(({ rsn, text }) => (
          <div key={rsn} className={cls.Reason}>
            <input
              onChange={handleReason}
              type="radio"
              id={rsn}
              name={rsn}
              value={rsn}
              checked={rsn === reason}
            />
            <label htmlFor={rsn}>{text}</label>
          </div>
        ))}
        <div className={cls.Reason}>
          <label htmlFor="other">Другое:</label>
          <input
            type="input"
            id="other"
            name="other"
            onChange={(e) => handleReason(e)}
          />
        </div>
      </div>
      <Button disabled={reason === ""} theme="bordered" onClick={handleAction}>
        Принять
      </Button>
    </div>
  );
};

export default Reject;
