export interface ListResponseDTO<T> {
  data: T[];
}

export interface ListPaginatedResponseDTO<T> extends ListResponseDTO<T> {
  totalCount: number;
}
