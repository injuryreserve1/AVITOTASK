import cls from "./Select.module.css";

// то что я везде таскую этот тип вероятно тоже плохая практика
type Event = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface Props {
  placeholder: string;
  handleParam: (e: Event) => void;
  data: string[];
  value: string;
}

const Select = ({ placeholder, value, handleParam, data }: Props) => {
  return (
    <select className={cls.Select} name={value} onChange={handleParam}>
      <option>{placeholder}</option>
      {data.map((cat, ind) => (
        <option key={cat} value={ind}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default Select;
