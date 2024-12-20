import { Between, FindOperator, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { isExist } from '../isExist';

export const getMinMaxFilter = (min?: number, max?: number): FindOperator<number> | undefined => {
  if (isExist(min) && isExist(max)) {
    return Between(min, max);
  }
  if (isExist(min)) {
    return MoreThanOrEqual(min);
  }
  if (isExist(max)) {
    return LessThanOrEqual(max);
  }

  return;
};
