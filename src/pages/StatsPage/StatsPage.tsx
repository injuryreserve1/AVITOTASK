import cls from "./StatsPage.module.css";
import { useSummaryQuery, useChartByNameQuery } from "@/features/Stats";
import { useSearchParams } from "react-router";
import BarChart from "@shared/ui/BarChart/BarChart";
import PieChart from "@shared/ui/PieChart/PieChart";
import Statics from "./ui/Statics/Statics";
import Period from "./ui/Period/Period";

type Event = React.MouseEvent<HTMLButtonElement>;

const StatsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ period: "today" });
  const periodParam = searchParams.get("period") || "";
  const { data: summary } = useSummaryQuery(periodParam);
  const { data: activity } = useChartByNameQuery("activity", periodParam);
  const { data: decision } = useChartByNameQuery("decisions", periodParam);
  const { data: categories } = useChartByNameQuery("categories", periodParam);

  const handleParam = (e: Event) => {
    const { value } = e.currentTarget;
    setSearchParams({ period: value });
  };

  return (
    <div className={cls.StatsPage}>
      <div className={cls.Period}>
        <Period periodParam={periodParam} handleParam={handleParam} />
      </div>
      <Statics summary={summary} />
      <div className={(cls.ActivityGraphic, cls.BarChart)}>
        <BarChart activity={activity} />
      </div>
      <div className={cls.Period}>
        <Period periodParam={periodParam} handleParam={handleParam} />
      </div>

      <div className={cls.PieChart}>
        <PieChart data={decision} />
        <PieChart data={categories} />
      </div>
    </div>
  );
};

export default StatsPage;
