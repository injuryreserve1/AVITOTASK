import cls from "./AdModerationHistory.module.css";

interface Props {
  moderationData: Record<string, string>;
}

const AdModerationHistory = ({ moderationData }: Props) => {
  const dateModeration = new Date(moderationData.timestamp).toLocaleString();
  return (
    <div className={cls.Moderation}>
      <dl className={cls.ModerationHistory}>
        <h3>История модерации:</h3>
        <div className={cls.Column}>
          <dt className={cls.Spec}>Модератор:</dt>
          <dd className={cls.SpecName}>{moderationData.moderatorName}</dd>
        </div>
        <div className={cls.Column}>
          <dt className={cls.Spec}>Время:</dt>
          <dd className={cls.SpecName}>{dateModeration}</dd>
        </div>
        <div className={cls.Column}>
          <dt className={cls.Spec}>{moderationData.reason && <>Причина:</>}</dt>
          <dd className={cls.SpecName}>
            {moderationData.reason && <>{moderationData.reason}</>}
          </dd>
        </div>
        <div className={cls.Column}>
          <dt className={cls.Spec}>
            {moderationData.comment && <>Комментарий:</>}
          </dt>
          <dd className={cls.SpecName}>
            {moderationData.comment && <>{moderationData.comment}</>}
          </dd>
        </div>
        <div className={cls.Column}>
          <dt className={cls.Spec}>{moderationData.action && <>Статус:</>}</dt>
          <dd className={cls.SpecName}>
            {moderationData.action && <>{moderationData.action}</>}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default AdModerationHistory;
