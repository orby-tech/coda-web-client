import telegramIcon from './icons/telegram.png';
import emailIcon from './icons/email.png';

export type SenderType = {
  id: string;
  target: string;
  countOfDays: string;
  lastSendDate: string;
  subject: string;
};

export interface Target {
  name: string
  icon: string
  alt: string
  text: string
}

const TelegramTarget: Target = {
  name: 'telegram',
  icon: telegramIcon,
  alt: 'telegram-taget-icon',
  text: 'telegram',
};

const EmailTarget: Target = {
  name: 'email',
  icon: emailIcon,
  alt: 'email-taget-icon',
  text: 'email',
};

export interface TargetEnum {
  telegram: Target;
  email: Target
}

export const targetEnum: TargetEnum = {
  telegram: TelegramTarget,
  email: EmailTarget,
};

export const targetsKeys = Object.keys(targetEnum);
export const targetsValues: Target[] = Object.values(targetEnum);
