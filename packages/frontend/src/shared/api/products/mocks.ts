import { Product } from './types';
import gpu from './gpu.webp';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Видеокарта 1',
    price: 85452,
    image: gpu.src,
    category: 'Видеокарты',
  },
  {
    id: 2,
    name: 'Видеокарта 2',
    price: 45452,
    image: gpu.src,
    category: 'Видеокарты',
  },
];
