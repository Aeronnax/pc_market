import type {
  NumberQueryFunction,
  PaginationResponse,
  PaginationResponseWithSkipTake,
} from './types';

export const generateQueryFn =
  <T>(
    queryFn: NumberQueryFunction<PaginationResponse<T[]>>,
    take: number
  ): NumberQueryFunction<PaginationResponseWithSkipTake<T[]>> =>
  async (context) => {
    const skip = context.pageParam ?? 0;
    const result = await queryFn(context);
    return {
      ...result,
      skip,
      take,
    };
  };
