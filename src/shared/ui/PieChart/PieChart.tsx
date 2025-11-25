import { VictoryPie, VictoryTheme } from "victory";
import { useTheme } from "@app/providers/ThemeProvider/useTheme";

interface Data {
  approved: number;
  rejected: number;
  requestChanges: number;
}

interface Props {
  data: Data;
}

const PieChart = ({ data }: Props) => {
  const { theme } = useTheme();
  const green = theme == "dark" ? "#1db954" : "#1ed760";
  const red = theme == "dark" ? "#950606" : "#ff746c";
  const yellow = theme == "dark" ? "#ba8e23" : "#ffffc5";
  const finalData =
    data &&
    Object.entries(data).map(([key, value]) => {
      return { x: key, y: value };
    });
  return (
    <VictoryPie
      innerRadius={50}
      padAngle={5}
      data={finalData}
      colorScale={[green, red, yellow]}
      theme={VictoryTheme.clean}
      labels={({ datum }) => {
        const yValue = Math.floor(datum.y);
        if (yValue === 0) return null;
        return `${datum.x}: ${yValue}`;
      }}
    />
  );
};

export default PieChart;
