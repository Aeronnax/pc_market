import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { CategoriesEntity } from './Categories.entity';

export class CategoriesSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(CategoriesEntity);

    const categories: Omit<CategoriesEntity, 'id'>[] = [
      { name: 'Процессоры' },
      { name: 'Видеокарты' },
      { name: 'Материнские платы' },
      { name: 'Клавиатуры' },
      { name: 'Мыши' },
      { name: 'Мониторы' },
    ];

    await repository.insert(categories);
  }
}
