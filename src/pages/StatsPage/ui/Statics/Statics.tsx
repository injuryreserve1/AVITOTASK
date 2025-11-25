import cls from "./Statics.module.css";

interface Props {
  summary: Record<string, string>;
}

const Statics = ({ summary }: Props) => {
  return (
    <div className={cls.Statics}>
      <div className={cls.Checked}>Проверено: {summary?.totalReviewed}</div>
      <div className={cls.Checked}>
        Одобрено: {Math.floor(Number(summary?.approvedPercentage))}
      </div>
      <div className={cls.Checked}>
        Отклонено: {Math.floor(Number(summary?.rejectedPercentage))}
      </div>
      <div className={cls.Checked}>Ср. время: {summary?.averageReviewTime}</div>
    </div>
  );
};

export default Statics;
