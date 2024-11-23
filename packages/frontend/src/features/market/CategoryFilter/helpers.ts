import { categories, FilterCategory } from './types';

export const checkStrIsCategory = (data: string): data is FilterCategory => {
  return categories.includes(data as FilterCategory);
};
