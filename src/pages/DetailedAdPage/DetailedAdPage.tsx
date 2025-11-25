import cls from "./DetailedAdPage.module.css";
import { useParams, useNavigate } from "react-router";
import { useAdQuery } from "@features/Ad";
import Button from "@shared/ui/Button/Button";
import Slider from "@shared/ui/Slider/Slider";
import AdActionButtons from "./ui/AdActionButtons/AdActionButtons";
import AdModerationHistory from "./ui/AdModerationHistory/AdModerationHistory";
import Specs from "./ui/Specs/Specs";
import SellerInfo from "./ui/SellerInfo/SellerInfo";

const DetailedAdPage = () => {
  const { id } = useParams();

  const { data } = useAdQuery(Number(id));

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const moderation = data?.moderationHistory[0] ?? [];
  const characteristics = data?.characteristics ?? [];
  const seller = data?.seller ?? [];
  const images = data?.images ?? [];

  return (
    <div className={cls.DetailedAdPage}>
      <div className={cls.Gallery}>
        <Slider images={images} />
        {/*слайдер рабочий но почему-то не всегда приходят на сайт все три фотографии*/}
      </div>
      <div className={cls.AllInfo}>
        <AdModerationHistory moderationData={moderation} />
        <Specs characteristics={characteristics} />
        <SellerInfo seller={seller} />
      </div>
      <AdActionButtons id={id} />
      <Button theme="bordered" onClick={handleGoBack}>
        Назад
      </Button>
    </div>
  );
};

export default DetailedAdPage;
