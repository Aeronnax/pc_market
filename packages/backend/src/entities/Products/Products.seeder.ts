import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { ProductsEntity } from './Products.entity';
import { CategoriesEntity } from 'src/entities/Categories/Categories.entity';
import { DataSource, Repository } from 'typeorm';
import { isExist } from 'src/helpers/isExist';

const generateCategories =
  (categoryRepository: Repository<CategoriesEntity>) =>
  async (name: string): Promise<CategoriesEntity> => {
    const foundCategory = await categoryRepository.findOneBy({
      name: name,
    });
    if (isExist(foundCategory)) {
      return foundCategory;
    }

    const newCategory = new CategoriesEntity();
    newCategory.name = name;
    return await categoryRepository.save(newCategory);
  };

export class ProductsSeeder implements Seeder {
  public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    const repository = dataSource.getRepository(ProductsEntity);
    const categoryRepository = dataSource.getRepository(CategoriesEntity);
    const productFactory = factoryManager.get(ProductsEntity);

    const getCategory = generateCategories(categoryRepository);

    const cpuCategory = await getCategory('Процессоры');

    const product1 = new ProductsEntity();
    product1.name = 'Intel i7-12700K';
    product1.description = 'Intel Core i7-12700K, 12 ядер, 20 потоков';
    product1.price = 248500;
    product1.category = cpuCategory;

    const mouseCategory = await getCategory('Мыши');

    const product2 = new ProductsEntity();
    product2.name = 'Razer Naga';
    product2.description = 'Игровая мышь Razer Naga c 16-ю кнопками!!!';
    product2.price = 15000;
    product2.category = mouseCategory;

    await repository.save([product1, product2]);

    await productFactory.saveMany(10);
  }
}
