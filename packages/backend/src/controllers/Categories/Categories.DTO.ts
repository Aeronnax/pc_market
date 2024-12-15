/**
 * Стандартная DTO для категории
 * @tsoaModel
 */
export interface CategoriesDTO {
  /**
   * @isInt
   * @example 1
   */
  id: number;

  /**
   * @example "Процессоры"
   */
  name: string;
}
