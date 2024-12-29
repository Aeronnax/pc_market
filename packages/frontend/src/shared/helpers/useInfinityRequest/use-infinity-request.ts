import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from '@tanstack/react-query';

import type {
  InfiniteRequestData,
  PaginationResponseWithSkipTake,
  UseInfiniteRequestConfig,
  UseInfiniteRequestReturn,
} from './types';

export const useInfiniteRequest = <
  T,
  TQueryFnData extends PaginationResponseWithSkipTake<
    T[]
  > = PaginationResponseWithSkipTake<T[]>,
>({
  queryKey,
  queryFn,
  options,
}: UseInfiniteRequestConfig<T, TQueryFnData>): UseInfiniteRequestReturn<
  T,
  TQueryFnData
> => {
  const fullOptions: typeof options = {
    ...options,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.take;
      const totalCount = lastPage.totalCount;
      if (totalCount >= nextSkip) {
        return nextSkip;
      }
      return undefined;
    },
    initialPageParam: 0,
  };

  const { data, ...rest } = useInfiniteQuery<
    TQueryFnData,
    DefaultError,
    InfiniteData<TQueryFnData>,
    QueryKey,
    number
  >({
    queryKey,
    queryFn: (context) => queryFn(context),
    ...fullOptions,
  });
  let result: InfiniteRequestData<T>['data'];
  if (data) {
    const onlyDataFlat = data.pages.flatMap((page) => page.items);

    const lastPage = data.pages[data.pages.length - 1];
    result = {
      items: onlyDataFlat,
      totalCount: lastPage.totalCount,
      take: lastPage.take,
      skip: lastPage.skip,
    };
  }
  return { data: result, ...rest };
};
