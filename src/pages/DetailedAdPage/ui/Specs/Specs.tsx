import cls from "./Specs.module.css";
import React from "react";

interface Props {
  characteristics: Record<string, string>;
}

const Specs = ({ characteristics }: Props) => {
  return (
    <div className={cls.Specs}>
      <dl className={cls.SpecsList}>
        <h3>Полные характеристики:</h3>
        {Object.entries(characteristics).map(([key, value]) => (
          <React.Fragment key={key}>
            <dt className={cls.Spec}>{key}:</dt>
            <dd>{String(value)}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
};

export default Specs;
