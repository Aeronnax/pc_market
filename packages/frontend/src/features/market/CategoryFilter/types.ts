import {
  categories as apiCategories,
  ProductCategory,
} from '../../../shared/api/products/types';

export type FilterCategory = ProductCategory | 'Все';
export const categories: FilterCategory[] = ['Все', ...apiCategories];
