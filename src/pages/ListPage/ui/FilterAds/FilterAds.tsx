import cls from "./FilterAds.module.css";
import Input from "@shared/ui/Input/Input";
import Select from "@shared/ui/Select/Select";
import Button from "@shared/ui/Button/Button";
import type { SetURLSearchParams } from "react-router";
import { useCallback } from "react";
import FilterStatus from "@features/Ad/ui/FilterStatus/FilterStatus";
import SortIcons from "@features/Ad/ui/SortIcons/SortIcons";
import FilterSearch from "@features/Ad/ui/FilterSearch/FilterSearch";

//то что я этот тип везде тащу может быть плохо
type Event =
  | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  | React.MouseEvent<HTMLButtonElement>;

type Params = Record<string, string | string[]>;

const categories = [
  "Электроника",
  "Недвижимость",
  "Транспорт",
  "Работа",
  "Услуги",
  "Животные",
  "Мода",
  "Детское",
];

interface Props {
  objParams: Record<string, string | string[]>;
  setSearchParams: SetURLSearchParams;
  defaultParams: Params;
}

const FilterAds = ({ objParams, setSearchParams, defaultParams }: Props) => {
  const clearAllParams = () => {
    setSearchParams(defaultParams);
  };

  const handleParam = useCallback(
    (e: Event) => {
      const { value, name } = e.currentTarget;

      setSearchParams((prevSearchParams) => {
        const newSearchParams = new URLSearchParams(prevSearchParams);
        newSearchParams.set(name, value.toString());
        return newSearchParams;
      });
    },
    [setSearchParams],
  );

  const handleManyParam = useCallback(
    (e: Event) => {
      const { value, name } = e.currentTarget;
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        const values = newParams.getAll(name);

        if (values.includes(value)) {
          newParams.delete(name);
          values
            .filter((v) => v !== value)
            .forEach((v) => newParams.append(name, v));
        } else {
          newParams.append(name, value);
        }
        return newParams;
      });
    },
    [setSearchParams],
  );

  const handleSortParam = useCallback(
    (sortBy: string) => {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        const currentSortBy = newParams.get("sortBy");
        const currentOrder = newParams.get("sortOrder") || "desc";

        if (currentSortBy === sortBy) {
          const newOrder = currentOrder === "asc" ? "desc" : "asc";
          newParams.set("sortOrder", newOrder);
        } else {
          newParams.set("sortBy", sortBy);
          newParams.set("sortOrder", "desc");
        }

        return newParams;
      });
    },
    [setSearchParams],
  );

  return (
    <div className={cls.FilterAds}>
      <div className={cls.FilterContainer}>
        <h4>Фильтры:</h4>
        <div className={cls.Icons}>
          <Select
            placeholder="Категория"
            value="categoryId"
            handleParam={handleParam}
            data={categories}
          />
          <FilterStatus
            objParams={objParams}
            handleManyParam={handleManyParam}
          />
          <SortIcons objParams={objParams} handleSortParam={handleSortParam} />

          <Input
            objParams={objParams}
            firstName="minPrice"
            secondName="maxPrice"
            handleParam={handleParam}
          />
          <div>
            <FilterSearch objParams={objParams} handleParam={handleParam} />
          </div>

          <Button
            className={cls.CancelBtn}
            size="M"
            theme="clear"
            onClick={clearAllParams}
          >
            Отменить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterAds;
