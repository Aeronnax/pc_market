import { Product } from './types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Видеокарта 1',
    price: 85452,
    description: 'Видеокарта',
    category: {
      id: 0,
      name: 'Видеокарты',
    },
  },
  {
    id: 2,
    name: 'Видеокарта 2',
    price: 45452,
    description: 'Видеокарта',
    category: {
      id: 0,
      name: 'Видеокарты',
    },
  },
];
