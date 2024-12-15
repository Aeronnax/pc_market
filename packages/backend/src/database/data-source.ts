import { DataSource } from 'typeorm';
import { dbConfig } from './dbConfig';
import type { SeederOptions } from 'typeorm-extension';
import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { entities } from 'src/entities/entities';
import { migrations } from 'src/migrations/migrations';

export const options: PostgresConnectionOptions & SeederOptions = {
  type: 'postgres',
  ...dbConfig,
  synchronize: false, // Работа с БД без миграций
  logging: false,
  entities: entities,
  migrations: migrations,
  subscribers: [],
};

export const AppDataSource = new DataSource(options);
