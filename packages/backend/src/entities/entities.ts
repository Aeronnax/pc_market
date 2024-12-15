import type { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';
import { UsersEntity } from './Users/Users.entity';
import { CategoriesEntity } from './Categories/Categories.entity';
import { ProductsEntity } from './Products/Products.entity';

export const entities: BaseDataSourceOptions['entities'] = [
  UsersEntity,
  CategoriesEntity,
  ProductsEntity,
];
