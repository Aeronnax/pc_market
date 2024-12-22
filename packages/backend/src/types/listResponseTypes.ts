export interface ListResponseDTO<T> {
  items: T[];
}

export interface ListPaginatedResponseDTO<T> extends ListResponseDTO<T> {
  /**
   * @isInt
   * @example 1
   */
  totalCount: number;
}
