import { type ListPaginatedResponseDTO, type ListResponseDTO } from 'src/types/listResponseTypes';

export const toListResponse = <T>(data: T[]): ListResponseDTO<T> => {
  return {
    items: data,
  };
};

export function toListPaginatedResponse<T>(data: T[], count: number): ListPaginatedResponseDTO<T> {
  return {
    items: data,
    totalCount: count,
  };
}
export function toListPaginatedResponseWithMap<T, TResult>(
  data: T[],
  count: number,
  transformItem: (dataArg: T) => TResult,
): ListPaginatedResponseDTO<TResult> {
  return {
    items: data.map(transformItem),
    totalCount: count,
  };
}
