import type { Seeder, SeederFactoryManager } from 'typeorm-extension';
import type { DataSource } from 'typeorm';
import { UsersEntity } from './Users.entity';

export class UsersSeeder implements Seeder {
  public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    const repository = dataSource.getRepository(UsersEntity);
    const userFactory = factoryManager.get(UsersEntity);

    // Сохранить конкретные данные
    await repository.insert([
      {
        firstName: 'Caleb',
        lastName: 'Barrows',
        email: 'caleb.barrows@gmail.com',
      },
    ]);

    // Сгенерировать и сохранить одного пользователя
    await userFactory.save();

    // Сгенерировать и сохранить несколько пользователей
    await userFactory.saveMany(5);
  }
}
