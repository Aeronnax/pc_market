import { type ListPaginatedResponseDTO, type ListResponseDTO } from 'src/types/listResponseTypes';

export const toListResponse = <T>(data: T[]): ListResponseDTO<T> => {
  return {
    data: data,
  };
};

export function toListPaginatedResponse<T>(data: T[], count: number): ListPaginatedResponseDTO<T> {
  return {
    data: data,
    totalCount: count,
  };
}
export function toListPaginatedResponseWithMap<T, TResult>(
  data: T[],
  count: number,
  transformItem: (dataArg: T) => TResult,
): ListPaginatedResponseDTO<TResult> {
  return {
    data: data.map(transformItem),
    totalCount: count,
  };
}
