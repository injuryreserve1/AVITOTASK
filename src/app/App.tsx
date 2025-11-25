import Header from "@widgets/ui/Header";
import { useTheme } from "./providers/ThemeProvider/useTheme";
import { Outlet } from "react-router";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <Header />
      <div className="container">
        <div className="page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
