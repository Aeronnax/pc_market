import { DataSource } from 'typeorm';
import { dbConfig } from './dbConfig';
import type { SeederOptions } from 'typeorm-extension';
import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// import { entities } from 'src/entities/entities';
import { migrations } from 'src/migrations/migrations';
import { CategoriesEntity } from 'src/entities/Categories/Categories.entity';
import { ProductsEntity } from 'src/entities/Products/Products.entity';

export const options: PostgresConnectionOptions & SeederOptions = {
  type: 'postgres',
  ...dbConfig,
  synchronize: true, // Работа с БД без миграций
  logging: false,
  entities: [CategoriesEntity, ProductsEntity],
  migrations: migrations,
  subscribers: [],
};

export const AppDataSource = new DataSource(options);
