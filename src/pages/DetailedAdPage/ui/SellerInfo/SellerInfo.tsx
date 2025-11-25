import cls from "./SellerInfo.module.css";

interface Props {
  seller: Record<string, string>;
}

const SellerInfo = ({ seller }: Props) => {
  const dateSeller = new Date(seller?.registeredAt).toLocaleString();
  return (
    <div className={cls.Seller}>
      <div className={cls.SellerInfo}>
        <h3>Продавец:</h3>

        <div className={cls.Row}>
          <span className={cls.Spec}>Имя:</span>
          <span className={cls.Value}>{seller.name}</span>
        </div>
        <div className={cls.Row}>
          <span className={cls.Spec}>Рейтинг:</span>
          <span className={cls.Value}>{seller.rating}</span>
        </div>
        <div className={cls.Row}>
          <span className={cls.Spec}>Зарегистрирован:</span>
          <span className={cls.Value}>{dateSeller}</span>
        </div>
        <div className={cls.Row}>
          <span className={cls.Spec}>Объявлений:</span>
          <span className={cls.Value}>{seller.totalAds}</span>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
