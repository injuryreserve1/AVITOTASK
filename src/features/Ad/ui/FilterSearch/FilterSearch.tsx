import cls from "./FilterSearch.module.css";

type Event =
  | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  | React.MouseEvent<HTMLButtonElement>;

interface Props {
  objParams: Record<string, string | string[]>;
  handleParam: (e: Event) => void;
}

const FilterSearch = ({ objParams, handleParam }: Props) => {
  return (
    <form className={cls.SearchForm}>
      <input
        value={objParams.search}
        className={cls.SearchInput}
        placeholder="Поиск:"
        name="search"
        onChange={handleParam}
      />
    </form>
  );
};

export default FilterSearch;
