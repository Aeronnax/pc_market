import { SeederConstructor } from 'typeorm-extension';
import { UsersSeeder } from './Users/Users.seeder';
import { CategoriesSeeder } from './Categories/Categories.seeder';
import { ProductsSeeder } from './Products/Products.seeder';

export const seeds: SeederConstructor[] = [UsersSeeder, CategoriesSeeder, ProductsSeeder];
