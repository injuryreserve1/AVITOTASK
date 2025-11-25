import cls from "./Ad.module.css";
import type { Advert } from "../model/adType";
import { AppNavLink } from "@shared/ui/AppNavLink/AppNavLink";
import { classNames } from "@shared/utils/classNames/classNames";

// interface Props extends Advert {
//   handleClick: React.MouseEventHandler<HTMLButtonElement>;
// }

const Ad = (props: Advert) => {
  const {
    id,
    title,
    description,
    price,
    category,
    images,
    status,
    priority,
    createdAt,
  } = props;

  const date = new Date(createdAt).toLocaleDateString();
  const statusClass = cls[status];
  const priorityClass = cls[priority];

  return (
    <div className={cls.Ad}>
      <div className={cls.Imgblock}>
        <img className={cls.AdImg} src={images[0]} alt={description} />
      </div>

      <div className={cls.Specs}>
        <div className={cls.Title}>{title}</div>
        <div className={cls.Price}>{price}₽</div>
        <div className={cls.CategoryDate}>
          <div className={cls.Category}>
            Категория:
            <span className={cls.CatValue}>{category}</span>
          </div>
          <div className={cls.Date}>
            Дата:<span className={cls.DateValue}>{date}</span>
          </div>
        </div>
        <div>
          <div className={cls.Status}>
            <span
              className={classNames(cls.StatusValue, { [statusClass]: true })}
            >
              {status}
            </span>
            <span
              className={classNames(cls.PriorityValue, {
                [priorityClass]: true,
              })}
            >
              {priority}
            </span>
          </div>
        </div>
      </div>

      <AppNavLink theme="green" to={`/item/${id}`} className={cls.AdBtn}>
        &gt;
      </AppNavLink>
    </div>
  );
};

export default Ad;
