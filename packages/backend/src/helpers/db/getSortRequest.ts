import { type FindOptionsOrder } from 'typeorm';
import { type SortDTO } from './types';
import { isExist } from '../isExist';

export const getSortRequest = <T extends object, TApiSort extends SortDTO<T, keyof T>>(
  sort?: TApiSort,
): FindOptionsOrder<T> | undefined => {
  if (!isExist(sort)) {
    return;
  }

  return {
    [sort.by]: sort.order,
  } as FindOptionsOrder<T>;
};
