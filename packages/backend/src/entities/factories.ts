import { type SeederFactoryItem } from 'typeorm-extension';
import { UsersFactory } from './Users/Users.factory';
import { CategoriesFactory } from './Categories/Categories.factory';
import { ProductsFactory } from './Products/Products.factory';

export const factories: SeederFactoryItem[] = [UsersFactory, CategoriesFactory, ProductsFactory];
