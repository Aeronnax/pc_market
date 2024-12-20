export interface SortDTO<T extends object> {
  /**
   * Поле для сортировки
   */
  by: keyof T;

  /**
   * Порядок сортировки
   */
  order: 'asc' | 'desc';
}

export interface PaginationDTO {
  /**
   * Кол-во необходимых элементов
   */
  take: number;

  /**
   * Кол-во элементов, которые нужно пропустить (например они были запрошены ранее)
   */
  skip: number;
}
