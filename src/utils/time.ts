import moment from 'moment';

export const formatDateTime = (time: string | null | undefined) => {
  return time ? moment(time, 'MM/DD/YYYY').toString() : '';
};
