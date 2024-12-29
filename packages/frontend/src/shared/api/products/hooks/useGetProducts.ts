import { getProducts } from '../products';
import { QueryKeys } from '../../queryKeys';
import {
  generateQueryFn,
  PaginatedRequestItem,
  useInfiniteRequest,
} from 'src/shared/helpers/useInfinityRequest';

// export const useGetProducts2 = (
//   request: Omit<Paths.GetProducts.RequestBody, 'take' | 'skip'>
// ) => {
//   return useInfiniteQuery({
//     queryKey: [QueryKeys.PRODUCTS_LIST, request],
//     queryFn: ({ pageParam = 0 }) =>
//       getProducts({ ...request, take: 6, skip: pageParam }),
//     getNextPageParam: (lastPage) => {
//       const { items, totalCount } = lastPage.data;
//       const currentPageCount = JSON.parse(lastPage.config.data).skip ?? 0;
//       const result =
//         currentPageCount + items.length < totalCount
//           ? currentPageCount + items.length
//           : undefined;

//       return result;
//     },

//     initialPageParam: 0,
//   });
// };

export const useGetProducts = (
  query: Omit<Paths.GetProducts.RequestBody, 'skip'>
) => {
  return useInfiniteRequest<PaginatedRequestItem<typeof getProducts>>({
    queryKey: [QueryKeys.PRODUCTS_LIST, query],
    queryFn: generateQueryFn(
      ({ pageParam = 0 }) => getProducts({ ...query, skip: pageParam }),
      query.take
    ),
  });
};
