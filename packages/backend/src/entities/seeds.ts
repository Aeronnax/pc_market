import { SeederConstructor } from 'typeorm-extension';
import { CategoriesSeeder } from './Categories/Categories.seeder';
import { ProductsSeeder } from './Products/Products.seeder';

export const seeds: SeederConstructor[] = [CategoriesSeeder, ProductsSeeder];
