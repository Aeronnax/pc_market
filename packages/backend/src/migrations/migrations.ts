import type { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';
import { CreateUsersTable1713124501156 } from './1713124501156-CreateUsersTable';
import { CreateProductsTable1734250710346 } from './1734250710346-CreateProductsTable';

export const migrations: BaseDataSourceOptions['migrations'] = [
  CreateUsersTable1713124501156,
  CreateProductsTable1734250710346,
];
