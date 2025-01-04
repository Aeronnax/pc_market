import { getProducts } from '../products';
import { QueryKeys } from '../../queryKeys';
import {
  generateQueryFn,
  PaginatedRequestItem,
  useInfiniteRequest,
} from 'src/shared/helpers/useInfinityRequest';

// import { useInfiniteQuery } from '@tanstack/react-query';
// import { isExist } from 'src/shared/helpers/isExist';

// export const useGetProducts = (
//   request: Omit<Paths.GetProducts.RequestBody, 'skip'>
// ) => {
//   const { data, ...result } = useInfiniteQuery({
//     queryKey: [QueryKeys.PRODUCTS_LIST, request],
//     queryFn: async ({ pageParam = 0 }) => {
//       const response = await getProducts({ ...request, skip: pageParam });
//       return {
//         ...response,
//         take: request.take,
//         skip: pageParam,
//       };
//     },
//     getNextPageParam: (lastPage) => {
//       const { items, totalCount } = lastPage;
//       const currentPageCount = lastPage.skip;
//       const result =
//         currentPageCount + items.length < totalCount
//           ? currentPageCount + items.length
//           : undefined;

//       return result;
//     },

//     initialPageParam: 0,
//   });

//   let fullData: Paths.GetProducts.Responses.$200 | undefined;
//   if (isExist(data)) {
//     const allPages = data.pages.flatMap((item) => item.items);
//     const lastItem = data.pages[data.pages.length - 1];
//     fullData = {
//       ...lastItem,
//       items: allPages,
//     };
//   }
//   return { ...result, data: fullData };
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
