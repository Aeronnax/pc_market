import { setSeederFactory } from 'typeorm-extension';
import { ProductsEntity } from './Products.entity';
import { CategoriesEntity } from 'src/entities/Categories/Categories.entity';
import { AppDataSource } from 'src/database/data-source';

export const ProductsFactory = setSeederFactory(ProductsEntity, async (faker) => {
  const categoryRepository = AppDataSource.getRepository(CategoriesEntity);

  const categories = await categoryRepository.find();
  const randomCategory = faker.helpers.arrayElement(categories);

  const product = new ProductsEntity();

  product.name = faker.commerce.productName();
  product.description = faker.commerce.productDescription();
  product.price = parseFloat(faker.commerce.price());
  product.category = randomCategory;

  return product;
});
