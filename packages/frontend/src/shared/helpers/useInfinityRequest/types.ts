import type {
  InfiniteQueryObserverResult,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UndefinedInitialDataInfiniteOptions,
  DefaultError,
  InfiniteData,
  QueryFunctionContext,
} from '@tanstack/react-query';

interface ApiPagination {
  totalCount: number;
}

interface LocalPagination {
  take: number;
  skip: number;
}

export interface PaginationResponse<T> extends ApiPagination {
  items: T;
}

export type PaginationResponseWithSkipTake<T> = PaginationResponse<T> &
  LocalPagination;

export interface InfiniteRequestData<T> {
  data: PaginationResponseWithSkipTake<T[]> | undefined;
}

export type Options<TQueryFnData> = Omit<
  UseInfiniteQueryOptions<
    TQueryFnData,
    unknown,
    TQueryFnData,
    TQueryFnData,
    QueryKey
  >,
  'queryKey' | 'queryFn'
>;
export type TQueryFunc<T> = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any
) => PaginationResponse<T[]> | Promise<PaginationResponse<T[]>>;
export type PaginatedRequestItem<TFunc extends TQueryFunc<unknown>> = Awaited<
  ReturnType<TFunc>
>['items'][number];

export interface UseInfiniteRequestConfig<
  T,
  TQueryFnData extends PaginationResponse<T[]> = PaginationResponse<T[]>,
> {
  queryKey: QueryKey;
  queryFn: QueryFunction<TQueryFnData, QueryKey, number>;
  options?:
    | Omit<
        UndefinedInitialDataInfiniteOptions<
          TQueryFnData,
          DefaultError,
          InfiniteData<TQueryFnData>,
          QueryKey,
          number
        >,
        'queryKey' | 'queryFn'
      >
    | undefined;
}

export type UseInfiniteRequestReturn<
  T,
  TQueryFnData extends PaginationResponse<T[]> = PaginationResponse<T[]>,
> = Omit<
  InfiniteQueryObserverResult<InfiniteData<TQueryFnData>, DefaultError>,
  'data'
> &
  InfiniteRequestData<T>;

export type NumberQueryFunction<T> = (
  context: QueryFunctionContext<QueryKey, number>
) => T | Promise<T>;
