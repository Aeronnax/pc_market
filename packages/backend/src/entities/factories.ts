import { SeederFactoryItem } from 'typeorm-extension';
import { CategoriesFactory } from './Categories/Categories.factory';
import { ProductsFactory } from './Products/Products.factory';

export const factories: SeederFactoryItem[] = [CategoriesFactory, ProductsFactory];
