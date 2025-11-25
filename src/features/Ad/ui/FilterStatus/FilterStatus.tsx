import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from "react-icons/fa";
import cls from "./FilterStatus.module.css";
import Button from "@shared/ui/Button/Button";

type Event =
  | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  | React.MouseEvent<HTMLButtonElement>;

interface Props {
  objParams: Record<string, string | string[]>;
  handleManyParam: (e: Event) => void;
}

const FilterStatus = ({ objParams, handleManyParam }: Props) => {
  return (
    <>
      <Button
        className={cls.NotActive}
        isActive={objParams["status[]"].includes("pending")}
        size="S"
        name="status[]"
        theme="bordered"
        value="pending"
        onClick={handleManyParam}
      >
        <FaHourglassHalf />
      </Button>
      <Button
        className={cls.NotActive}
        isActive={objParams["status[]"].includes("approved")}
        size="S"
        name="status[]"
        value="approved"
        theme="bordered"
        onClick={handleManyParam}
      >
        <FaCheckCircle />
      </Button>
      <Button
        className={cls.NotActive}
        isActive={objParams["status[]"].includes("rejected")}
        name="status[]"
        size="S"
        theme="bordered"
        value="rejected"
        onClick={handleManyParam}
      >
        <FaTimesCircle />
      </Button>
    </>
  );
};

export default FilterStatus;
