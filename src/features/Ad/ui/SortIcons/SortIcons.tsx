import { FaSortNumericUp, FaSortNumericDown, FaClock } from "react-icons/fa";
import cls from "./SortIcons.module.css";
import Button from "@shared/ui/Button/Button";
import { IoIosFlash } from "react-icons/io";

interface Props {
  objParams: Record<string, string | string[]>;
  handleSortParam: (arg: string) => void;
}

const SortIcons = ({ objParams, handleSortParam }: Props) => {
  return (
    <>
      <Button
        className={cls.NotActive}
        isActive={objParams.sortBy == "createdAt"}
        name="sortBy"
        size="S"
        theme="bordered"
        value="createdAt"
        onClick={() => handleSortParam("createdAt")}
      >
        {objParams.sortBy === "createdAt" && objParams.sortOrder === "desc" ? (
          <>
            ↓
            <FaClock />
          </>
        ) : (
          <>
            ↑
            <FaClock />
          </>
        )}
      </Button>
      <Button
        className={cls.NotActive}
        isActive={objParams.sortBy == "price"}
        name="sortBy"
        size="S"
        theme="bordered"
        onClick={() => handleSortParam("price")}
      >
        {objParams.sortBy == "price" && objParams.sortOrder == "asc" ? (
          <FaSortNumericUp />
        ) : (
          <FaSortNumericDown />
        )}
      </Button>
      <Button
        className={cls.NotActive}
        isActive={objParams.sortBy == "priority"}
        name="priority"
        size="S"
        theme="bordered"
        onClick={() => handleSortParam("priority")}
      >
        {objParams.sortBy === "priority" && objParams.sortOrder === "desc" ? (
          <>
            ↑
            <IoIosFlash />
          </>
        ) : (
          <>
            ↓
            <IoIosFlash />
          </>
        )}
      </Button>
    </>
  );
};

export default SortIcons;
