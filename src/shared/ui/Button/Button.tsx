import { classNames } from "@shared/utils/classNames/classNames";
import cls from "./Button.module.css";
import { type ButtonHTMLAttributes, type FC } from "react";

type ThemeButton = "bordered" | "clear" | "red" | "green" | "yellow";
type ButtonSize = "M" | "L" | "S";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  size?: ButtonSize;
  disabled?: boolean;
  name?: string;
  value?: string;
  isActive?: boolean;
}

export const Button: FC<Props> = (props) => {
  const {
    className = "",
    children,
    theme = "bordered",
    size = "M",
    disabled = false,
    isActive = false,
    name,
    value,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.disabled]: disabled,
    [cls.Active]: isActive,
  };

  const additional = [className, cls[theme], cls[size]];

  return (
    <button
      value={value}
      name={name}
      className={classNames(cls.Button, mods, additional)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
