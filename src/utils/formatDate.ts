import { format } from 'date-fns';

const formatDate = (value: string): string => {
  let date = new Date(value);
  return format(date, "dd/MM/yyyy"); // TODO
}
export default formatDate;
