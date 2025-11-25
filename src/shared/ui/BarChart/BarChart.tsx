import { useTheme } from "@app/providers/ThemeProvider/useTheme";
import {
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryAxis,
  VictoryLegend,
  VictoryTheme,
} from "victory";

interface Activity {
  date: string;
  approved: number;
  rejected: number;
  requestChanges: number;
}

interface Props {
  activity: Activity[];
}

const BarChart = ({ activity }: Props) => {
  const { theme } = useTheme();

  const approved = activity?.map(({ date, approved }) => {
    return {
      x: date.slice(-2),
      y: approved,
    };
  });
  const rejected = activity?.map(({ date, rejected }) => {
    return {
      x: date.slice(-2),
      y: rejected,
    };
  });
  const request = activity?.map(({ date, requestChanges }) => {
    return {
      x: date.slice(-2),
      y: requestChanges,
    };
  });

  const chartLength = activity?.length > 0 ? activity?.length : 1;

  return (
    <VictoryChart
      width={800}
      domain={{
        x: [0, chartLength + 1],
        y: [0, 10], //summary
      }}
      theme={VictoryTheme.clean}
      domainPadding={{ x: 30 }}
      style={{}}
    >
      <VictoryLegend
        x={50}
        y={10}
        orientation="horizontal"
        data={[
          {
            name: "Одобрено",
            symbol: { fill: theme == "dark" ? "#1db954" : "#1ed760" },
          },

          {
            name: "Отклонено",
            symbol: { fill: theme == "dark" ? "#950606" : "#ff746c" },
          },

          {
            name: "Запрос изменений",
            symbol: { fill: theme == "dark" ? "#ba8e23" : "#ffffc5" },
          },
        ]}
        style={{
          labels: {
            fill: theme == "dark" ? "white" : "black",
            stroke: "none",
          },
          border: {
            stroke: "none",
          },
        }}
      />

      <VictoryAxis
        style={{
          tickLabels: {
            fontSize: 7,
            fill: theme == "dark" ? "white" : "black",
          },
        }}
      />
      <VictoryAxis
        dependentAxis
        style={{
          tickLabels: {
            fontSize: 7,
            fill: theme == "dark" ? "white" : "black",
          },
        }}
      />

      <VictoryStack>
        <VictoryBar
          key="approved"
          data={approved}
          style={{ data: { fill: theme == "dark" ? "#1db954" : "#1ed760" } }}
        />

        <VictoryBar
          key="rejected"
          data={rejected}
          style={{ data: { fill: theme == "dark" ? "#950606" : "#ff746c" } }}
        />

        <VictoryBar
          key="requestChanges"
          data={request}
          style={{ data: { fill: theme == "dark" ? "#ba8e23" : "#ffffc5" } }}
        />
      </VictoryStack>
    </VictoryChart>
  );
};

export default BarChart;
