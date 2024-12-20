import { type PaginationDTO, type SortDTO } from 'src/helpers/db/types';
import { type CategoriesDTO } from '../Categories/Categories.DTO';

/**
 * Стандартный DTO для продукта
 * @tsoaModel
 */
export interface ProductDTO {
  /**
   * @isInt
   * @example 1
   */
  id: number;

  /**
   * @example "Intel-core i7"
   */
  name: string;

  /**
   * @example "Горячая штучка"
   */
  description: string;

  /**
   * @example 12554.80
   */
  price: number;

  /**
   * @description Категория продукта
   */
  category: CategoriesDTO;
}

/**
 * Запрос для получения списка продуктов
 * @tsoaModel
 */
export interface ProductListRequestDTO extends PaginationDTO {
  /**
   * ID категории для фильтрации
   * @isInt
   */
  categoryId?: number;

  /**
   * Минимальная цена
   */
  minPrice?: ProductDTO['price'];

  /**
   * Максимальная цена
   */
  maxPrice?: ProductDTO['price'];

  sort?: SortDTO<ProductDTO, keyof ProductDTO>;
}
