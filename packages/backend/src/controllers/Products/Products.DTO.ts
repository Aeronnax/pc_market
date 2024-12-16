import { CategoriesDTO } from '../Categories/Categories.DTO';

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

export interface ProductListRequestDTO {
  categoryId?: CategoriesDTO['id'];
}
