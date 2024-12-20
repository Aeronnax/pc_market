import { FindOptionsOrder } from 'typeorm';
import { SortDTO } from './types';
import { isExist } from '../isExist';

export const getSortRequest = <T extends object>(
  sort?: SortDTO<T>,
): FindOptionsOrder<T> | undefined => {
  if (!isExist(sort)) {
    return;
  }

  return {
    [sort.by]: sort.order,
  } as FindOptionsOrder<T>;
};
