import cls from "./Input.module.css";

type Event = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface Props {
  firstName: string;
  secondName: string;
  objParams: Record<string, string | string[]>;
  handleParam?: (e: Event) => void;
}

const Input = ({ firstName, secondName, handleParam, objParams }: Props) => {
  return (
    <div className={cls.Wrapper}>
      <div className={cls.rangeslider}>
        <div className={cls.Labels}>
          <label className={cls.FirstLabel} htmlFor={firstName}>
            {objParams.minPrice || 1}₽
          </label>
          <label className={cls.SecondLabel} htmlFor={secondName}>
            {objParams.maxPrice || 120000}₽
          </label>
        </div>
        <input
          className={`${cls.inputRanges} ${cls.minInputRanges}`}
          name={firstName}
          type="range"
          min="1"
          max="120000"
          value={objParams.minPrice || 1}
          onChange={handleParam}
        />

        <input
          className={`${cls.inputRanges} ${cls.maxInputRanges}`}
          name={secondName}
          type="range"
          min="1"
          max="120000"
          value={objParams.maxPrice || 120000}
          onChange={handleParam}
        />
      </div>
    </div>
  );
};

export default Input;
