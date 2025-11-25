import cls from "./AdsList.module.css";
import { Ad } from "@entities/ad";
import type { Data } from "@entities/ad/model/adType";
import type { Advert } from "@entities/ad/model/adType";

interface Props {
  data: Data;
  isLoading: boolean;
  // handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const AdsList = (props: Props) => {
  const { data, isLoading } = props;
  const adverts: Advert[] = data?.ads ?? [];

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={cls.AdsList}>
      {adverts.map((data) => (
        <Ad key={data.id} {...data} />
      ))}
    </div>
  );
};

export default AdsList;
