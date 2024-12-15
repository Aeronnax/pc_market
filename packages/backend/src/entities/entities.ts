import type { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';
import { CategoriesEntity } from './Categories/Categories.entity';
import { ProductsEntity } from './Products/Products.entity';

export const entities: BaseDataSourceOptions['entities'] = [CategoriesEntity, ProductsEntity];
