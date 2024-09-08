import 'reflect-metadata';
import { createDatabase } from 'typeorm-extension';
import { AppDataSource } from '../data-source';

const createDb = async (): Promise<void> => {
  await createDatabase({
    options: AppDataSource.options,
  });

  const database = await AppDataSource.initialize();
  await database.runMigrations();
  await database.destroy();
};

await createDb();
console.log('DB created successfully.');
process.exit(0);
