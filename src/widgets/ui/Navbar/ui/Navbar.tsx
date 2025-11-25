import cls from "./Navbar.module.css";
import { AppNavLink } from "@shared/ui/AppNavLink/AppNavLink";

const Navbar = () => {
  return (
    <ul className={cls.Navbar}>
      <li className={cls.NavBarItem}>
        <AppNavLink to="/list">Список</AppNavLink>
      </li>
      <li className={cls.NavBarItem}>
        <AppNavLink to="/stats">Статистика</AppNavLink>
      </li>
    </ul>
  );
};

export default Navbar;
