import Button from "@shared/ui/Button/Button";
import { useTheme } from "@app/providers/ThemeProvider/useTheme";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import Navbar from "@widgets/ui/Navbar";
import cls from "./Header.module.css";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const mode =
    theme == "dark" ? (
      <MdOutlineNightlight className={cls.icons} />
    ) : (
      <MdOutlineLightMode className={cls.icons} />
    );
  return (
    <header className={cls.Header}>
      <Navbar />
      {/*<Preferences />*/}
      <div className={cls.Preferences}>
        <Button size="M" className={cls.btn_icons} onClick={toggleTheme}>
          {mode}
        </Button>
      </div>
    </header>
  );
};

export default Header;
