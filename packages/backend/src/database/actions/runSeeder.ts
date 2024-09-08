import 'reflect-metadata';
import { runSeeders } from 'typeorm-extension';
import { AppDataSource } from '../data-source';
import { seeds } from 'src/entities/seeds';
import { factories } from 'src/entities/factories';

const seedDb = async (): Promise<void> => {
  const database = await AppDataSource.initialize();
  await runSeeders(database, {
    factories: factories,
    seeds: seeds,
    seedTracking: true,
  });
  await database.destroy();
};

await seedDb();
console.log('DB seeded successfully.');
process.exit(0);
