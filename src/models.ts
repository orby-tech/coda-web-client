export type SenderType = {
  id: string;
  target: string;
  countOfDays: string;
  lastSendDate: string;
  subject: string;
};

export enum TargetEnum {
  telegram = 'telegram',
  email = 'email',
}
