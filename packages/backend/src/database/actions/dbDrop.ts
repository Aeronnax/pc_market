import 'reflect-metadata';
import { AppDataSource } from '../data-source';

const dropDb = async (): Promise<void> => {
  AppDataSource.setOptions({ ...AppDataSource.options, synchronize: false });
  const database = await AppDataSource.initialize();
  await database.dropDatabase();
  await database.destroy();
};

await dropDb();
console.log('DB dropped successfully.');
process.exit(0);
