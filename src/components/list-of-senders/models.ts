export type SenderType = {
  id: string;
  target: string;
  count_of_days: string;
  last_send_date: string;
  subject: string;
};
export enum TargetEnum {
  telegram = "telegram",
  email = "email",
}
