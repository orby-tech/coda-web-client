import { TargetEnum } from '../../../models';
import telegramIcon from '../../../icons/telegram.png';
import emailIcon from '../../../icons/email.png';
import './target-info.css';

interface Props {
  target: TargetEnum;
}

const TargetInfo = ({ target }: Props) => {
  if (target === TargetEnum.telegram) {
    return (
      <div className="target-block">
        <img
          src={telegramIcon}
          className="telegram-taget-icon"
          alt="telegram-taget-icon"
        />
        telegram
      </div>
    );
  } if (target === TargetEnum.email) {
    return (
      <div className="target-block">
        <img
          src={emailIcon}
          className="email-taget-icon"
          alt="email-taget-icon"
        />
        email
      </div>
    );
  }
  return <></>;
};

export default TargetInfo;
