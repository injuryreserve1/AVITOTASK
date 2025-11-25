import type { ReactNode } from "react";
import { NavLink, type NavLinkProps } from "react-router";
import { classNames } from "@shared/utils/classNames/classNames";
import cls from "./AppNavLink.module.css";

type NavLinkTheme = "themed" | "red" | "green" | "yellow";
type size = "M" | "L";

interface Props extends NavLinkProps {
  children: ReactNode;
  theme?: NavLinkTheme;
  size?: size;
  className?: string;
  disabled?: boolean;
  isActive?: boolean;
}

export const AppNavLink = (props: Props) => {
  const {
    to,
    children,
    disabled = false,
    className = "",
    theme = "themed",
    size = "M",
  } = props;
  const additional = [className, cls[theme], cls[size]];
  const classes = (isActive: boolean) => {
    return classNames(cls.NavLink, { [cls.Active]: isActive }, additional);
  };

  if (disabled) {
    return (
      <div
        className={classNames(
          cls.NavLink,
          { [cls.Disabled]: true },
          additional,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <NavLink className={({ isActive }) => classes(isActive)} to={to}>
      {children}
    </NavLink>
  );
};
