import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { ProductsEntity } from './Products.entity';
import { CategoriesEntity } from 'src/entities/Categories/Categories.entity';
import { DataSource } from 'typeorm';

export class ProductsSeeder implements Seeder {
  public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    const repository = dataSource.getRepository(ProductsEntity);
    const categoryRepository = dataSource.getRepository(CategoriesEntity);
    const productFactory = factoryManager.get(ProductsEntity);

    const electronicsCategory = new CategoriesEntity();
    electronicsCategory.name = 'Electronics';
    await categoryRepository.save(electronicsCategory);

    const accessoriesCategory = new CategoriesEntity();
    accessoriesCategory.name = 'Accessories';
    await categoryRepository.save(accessoriesCategory);

    const product1 = new ProductsEntity();
    product1.name = 'Intel-core i7 ';
    product1.description = 'Intel Core i7-12700K, 12 ядер, 20 потоков';
    product1.price = 248500;
    product1.category = electronicsCategory;

    const product2 = new ProductsEntity();
    product2.name = 'Мышь';
    product2.description = 'Игровая мышь';
    product2.price = 15000;
    product2.category = accessoriesCategory;

    await repository.save([product1, product2]);

    await productFactory.saveMany(10);
  }
}
