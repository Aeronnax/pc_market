/**
 * Стандартный DTO для продукта
 * @tsoaModel
 */
export interface ProductDTO {
  /**
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
   * @example 125548
   */
  price: number;

  /**
   * @example 1
   * @description ID категории продукта
   */
  categoryId: number;
}

/**
 * Данные для создания или обновления продукта
 * @tsoaModel
 */
export interface ProductCreationParams
  extends Pick<ProductDTO, 'name' | 'description' | 'price' | 'categoryId'> {}
