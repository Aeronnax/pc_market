import { setSeederFactory } from 'typeorm-extension';
import { CategoriesEntity } from './Categories.entity';

export const CategoriesFactory = setSeederFactory(CategoriesEntity, (faker) => {
  const category = new CategoriesEntity();
  category.name = faker.commerce.product();
  return category;
});
