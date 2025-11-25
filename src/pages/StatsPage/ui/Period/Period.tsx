import cls from "./Period.module.css";
import Button from "@/shared/ui/Button/Button";

type Event = React.MouseEvent<HTMLButtonElement>;

interface Props {
  periodParam: string;
  handleParam: (e: Event) => void;
}

const Period = ({ periodParam, handleParam }: Props) => {
  return (
    <div className={cls.Period}>
      Период:
      <Button
        className={periodParam == "today" ? cls.Active : ""}
        name="period"
        value="today"
        theme="clear"
        onClick={handleParam}
        isActive={periodParam === "today"}
      >
        Сегодня
      </Button>
      |
      <Button
        className={periodParam == "week" ? cls.Active : ""}
        name="period"
        value="week"
        theme="clear"
        onClick={handleParam}
        isActive={periodParam === "week"}
      >
        7д
      </Button>
      |
      <Button
        className={periodParam == "month" ? cls.Active : ""}
        name="period"
        value="month"
        theme="clear"
        onClick={handleParam}
        isActive={periodParam === "month"}
      >
        30д
      </Button>
    </div>
  );
};

export default Period;
